#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ANSI_RE = /\x1b\[[0-?]*[ -/]*[@-~]/g;

function usage() {
  console.log(`Usage:
  node scripts/asciicast-tool.mjs info <input.cast>
  node scripts/asciicast-tool.mjs retime <input.cast> <output.cast> [--speed 1.5] [--max-gap 0.8] [--char-gap 0.035] [--paste-gap 0.001] [--paste-min 24]
  node scripts/asciicast-tool.mjs split <input.cast> <output-prefix> --at 35.2,92.3

Notes:
  - asciicast v2 uses absolute event times.
  - asciicast v3 uses intervals between events.
  - split times are elapsed seconds from the beginning of playback.
`);
}

function parseArgs(argv) {
  const positional = [];
  const flags = {};

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('--')) {
      positional.push(arg);
      continue;
    }

    const key = arg.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith('--')) {
      flags[key] = true;
    } else {
      flags[key] = next;
      i += 1;
    }
  }

  return { positional, flags };
}

function readCast(filePath) {
  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
  const headerLine = lines.find((line) => line.trim() && !line.startsWith('#'));
  if (!headerLine) {
    throw new Error(`No asciicast header found in ${filePath}`);
  }

  const header = JSON.parse(headerLine);
  const version = header.version;
  if (version !== 2 && version !== 3) {
    throw new Error(`Unsupported asciicast version ${version}; expected v2 or v3`);
  }

  const events = [];
  for (const line of lines.slice(1)) {
    if (!line.trim() || line.startsWith('#')) {
      continue;
    }
    const event = JSON.parse(line);
    if (!Array.isArray(event) || event.length < 3) {
      throw new Error(`Invalid event line: ${line}`);
    }
    events.push(event);
  }

  return { header, version, events };
}

function withElapsed(cast) {
  let elapsed = 0;
  return cast.events.map((event, index) => {
    const [timeOrInterval, code, data] = event;
    if (cast.version === 2) {
      elapsed = timeOrInterval;
    } else {
      elapsed += timeOrInterval;
    }
    return {
      index,
      elapsed,
      gap: index === 0 ? elapsed : elapsed - (cast.version === 2 ? cast.events[index - 1][0] : elapsed - timeOrInterval),
      code,
      data,
      original: event,
    };
  });
}

function getDuration(cast) {
  if (cast.events.length === 0) {
    return 0;
  }

  if (cast.version === 2) {
    return cast.events.at(-1)[0];
  }

  return cast.events.reduce((total, [interval]) => total + interval, 0);
}

function stripAnsi(value) {
  return String(value).replace(ANSI_RE, '');
}

function summarize(cast, filePath) {
  const rows = withElapsed(cast);
  const codes = new Map();
  for (const row of rows) {
    codes.set(row.code, (codes.get(row.code) || 0) + 1);
  }

  console.log(`File: ${filePath}`);
  console.log(`Version: ${cast.version}`);
  console.log(`Terminal: ${describeTerm(cast.header)}`);
  console.log(`Events: ${cast.events.length}`);
  console.log(`Duration: ${getDuration(cast).toFixed(3)}s`);
  console.log(`Codes: ${[...codes].map(([code, count]) => `${code}:${count}`).join(', ')}`);
  console.log('');
  console.log('Long gaps and useful split candidates:');

  let previousElapsed = 0;
  let printed = 0;
  for (const row of rows) {
    const gap = row.elapsed - previousElapsed;
    const clean = stripAnsi(row.data).replace(/\r/g, '\\r').replace(/\n/g, '\\n');
    if (gap >= 1 || /# |Aster RPC|No DNS|^\{\\r\\n/.test(clean)) {
      console.log(
        `${String(row.index).padStart(3, '0')}  t=${row.elapsed.toFixed(3).padStart(7)}s  gap=${gap
          .toFixed(3)
          .padStart(6)}s  ${row.code}  ${JSON.stringify(clean.slice(0, 120))}`,
      );
      printed += 1;
    }
    previousElapsed = row.elapsed;
  }

  if (printed === 0) {
    console.log('  No gaps >= 1s found.');
  }
}

function describeTerm(header) {
  if (header.version === 2) {
    return `${header.width}x${header.height}`;
  }
  return `${header.term?.cols ?? '?'}x${header.term?.rows ?? '?'}`;
}

function normalizeGap(gap, event, options, isPasteEvent = false) {
  const speed = Number(options.speed ?? 1);
  const maxGap = numberOrNull(options.maxGap ?? options['max-gap']);
  const charGap = numberOrNull(options.charGap ?? options['char-gap']);
  const pasteGap = numberOrNull(options.pasteGap ?? options['paste-gap']);
  let nextGap = gap / speed;

  if (isPasteEvent && pasteGap !== null) {
    return roundMillis(Math.min(nextGap, pasteGap));
  }

  const data = String(event[2] ?? '');
  const isSingleVisibleChar =
    event[1] === 'o' &&
    stripAnsi(data).length === 1 &&
    !/[\r\n]/.test(stripAnsi(data));

  if (isSingleVisibleChar && charGap !== null) {
    nextGap = Math.min(nextGap, charGap);
  }

  if (maxGap !== null) {
    nextGap = Math.min(nextGap, maxGap);
  }

  return roundMillis(Math.max(0, nextGap));
}

function numberOrNull(value) {
  if (value === undefined || value === null || value === false) {
    return null;
  }
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(`Expected numeric value, got ${value}`);
  }
  return parsed;
}

function retime(cast, options) {
  const header = { ...cast.header };
  const events = [];
  let previousElapsed = 0;
  let nextElapsed = 0;
  const pasteIndexes = detectPasteIndexes(cast, options);

  for (const row of withElapsed(cast)) {
    const originalGap = row.elapsed - previousElapsed;
    const nextGap = normalizeGap(originalGap, row.original, options, pasteIndexes.has(row.index));
    nextElapsed = roundMillis(nextElapsed + nextGap);

    if (cast.version === 2) {
      events.push([nextElapsed, row.code, row.data]);
    } else {
      events.push([nextGap, row.code, row.data]);
    }

    previousElapsed = row.elapsed;
  }

  setDuration(header, cast.version, events);
  return { header, version: cast.version, events };
}

function detectPasteIndexes(cast, options) {
  const pasteMin = Number(options.pasteMin ?? options['paste-min'] ?? 24);
  if (!Number.isFinite(pasteMin) || pasteMin <= 0) {
    return new Set();
  }

  const indexes = new Set();
  let run = [];

  const flush = () => {
    const value = run.map((row) => stripAnsi(row.data)).join('');
    if (run.length >= pasteMin && /^[A-Za-z0-9_./:=+-]+$/.test(value)) {
      for (const row of run) {
        indexes.add(row.index);
      }
    }
    run = [];
  };

  for (const row of withElapsed(cast)) {
    const clean = stripAnsi(row.data);
    const isSingleTokenChar =
      row.code === 'o' &&
      clean.length === 1 &&
      !/[\s\r\n'"{}]/.test(clean);

    if (isSingleTokenChar) {
      run.push(row);
    } else {
      flush();
    }
  }
  flush();

  return indexes;
}

function splitCast(cast, splitTimes) {
  const cuts = splitTimes
    .map(Number)
    .filter(Number.isFinite)
    .sort((a, b) => a - b);

  if (cuts.length === 0) {
    throw new Error('split requires --at with one or more comma-separated elapsed seconds');
  }

  const chunks = [];
  let current = [];
  let cutIndex = 0;
  let previousElapsed = 0;
  let currentStart = 0;

  for (const row of withElapsed(cast)) {
    while (cutIndex < cuts.length && row.elapsed >= cuts[cutIndex] && current.length > 0) {
      chunks.push(makeChunk(cast, current, currentStart));
      current = [];
      currentStart = previousElapsed;
      cutIndex += 1;
    }

    current.push(row);
    previousElapsed = row.elapsed;
  }

  if (current.length > 0) {
    chunks.push(makeChunk(cast, current, currentStart));
  }

  return chunks;
}

function makeChunk(cast, rows, startElapsed) {
  const header = {
    ...cast.header,
    title: cast.header.title ? `${cast.header.title} segment` : undefined,
  };
  const events = [];
  let previous = startElapsed;

  for (const row of rows) {
    const gap = roundMillis(row.elapsed - previous);
    if (cast.version === 2) {
      const elapsedInChunk = roundMillis(row.elapsed - startElapsed);
      events.push([elapsedInChunk, row.code, row.data]);
    } else {
      events.push([gap, row.code, row.data]);
    }
    previous = row.elapsed;
  }

  setDuration(header, cast.version, events);
  return { header, version: cast.version, events };
}

function setDuration(header, version, events) {
  if (events.length === 0) {
    header.duration = 0;
    return;
  }

  if (version === 2) {
    header.duration = events.at(-1)[0];
    return;
  }

  header.duration = roundMillis(events.reduce((total, [interval]) => total + interval, 0));
}

function roundMillis(value) {
  return Math.round(value * 1000) / 1000;
}

function writeCast(cast, outputPath) {
  const dir = path.dirname(outputPath);
  fs.mkdirSync(dir, { recursive: true });

  const lines = [
    JSON.stringify(cast.header),
    ...cast.events.map((event) => JSON.stringify(event)),
    '',
  ];
  fs.writeFileSync(outputPath, lines.join('\n'));
}

function main() {
  const [command, ...rest] = process.argv.slice(2);
  const { positional, flags } = parseArgs(rest);

  if (!command || flags.help || flags.h) {
    usage();
    return;
  }

  if (command === 'info') {
    const [input] = positional;
    if (!input) {
      usage();
      process.exitCode = 1;
      return;
    }
    summarize(readCast(input), input);
    return;
  }

  if (command === 'retime') {
    const [input, output] = positional;
    if (!input || !output) {
      usage();
      process.exitCode = 1;
      return;
    }
    const result = retime(readCast(input), flags);
    writeCast(result, output);
    console.log(`Wrote ${output} (${getDuration(result).toFixed(3)}s)`);
    return;
  }

  if (command === 'split') {
    const [input, outputPrefix] = positional;
    if (!input || !outputPrefix || !flags.at) {
      usage();
      process.exitCode = 1;
      return;
    }
    const chunks = splitCast(readCast(input), String(flags.at).split(','));
    chunks.forEach((chunk, index) => {
      const suffix = String(index + 1).padStart(2, '0');
      const output = `${outputPrefix}-${suffix}.cast`;
      writeCast(chunk, output);
      console.log(`Wrote ${output} (${getDuration(chunk).toFixed(3)}s)`);
    });
    return;
  }

  usage();
  process.exitCode = 1;
}

main();
