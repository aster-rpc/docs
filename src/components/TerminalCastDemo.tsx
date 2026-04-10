import React, { useEffect, useState } from 'react';

const FALLBACK_TERMINAL_LINES = [
  { text: 'Aster RPC — encrypted P2P calls, any language', tone: 'hero' },
  { text: '# server.py — 12 lines, that is the whole service', tone: 'comment' },
  { text: '@service(name="Fleet", version=1)', tone: 'schema' },
  { text: 'class Fleet:', tone: 'code' },
  { text: '    @rpc()', tone: 'schema' },
  { text: '    async def status(self, req) -> StatusResponse:', tone: 'code' },
  { text: '        return StatusResponse(hostname=platform.node(), ...)', tone: 'code' },
  { text: '# Start it', tone: 'comment' },
  { text: '$ python server.py', tone: 'prompt' },
  { text: 'aster14Y5xCM3ErHLsxX6CVsGPmPwtMFmkPEDLB7kDQfCdLZohfWBR9syYFfgR8nTo3ww34uot5HXTE', tone: 'endpoint' },
  { text: '# Call it — from anywhere, any language', tone: 'comment' },
  { text: '$ aster call ', tone: 'prompt', suffix: 'aster14Y5x…HXTE Fleet.status \'{"node_id":"edge-7"}\'' },
  { text: '{', tone: 'json' },
  { text: '  "node_id": "edge-7",', tone: 'json' },
  { text: '  "hostname": "Emruls-MacBook-Pro.local",', tone: 'json' },
  { text: '  "status": "healthy",', tone: 'json' },
  { text: '  "uptime_secs": 3812688', tone: 'json' },
  { text: '}', tone: 'json' },
  { text: 'No DNS. No certs. No .proto files. Just run it.', tone: 'payoff' },
];

type TerminalLine = {
  text: string;
  tone: string;
  suffix?: string;
};

export default function TerminalCastDemo({
  castPath = '/demo-polished.cast',
  title = 'mission-control / aster demo',
  status = 'live schema',
  insight,
  className,
}: {
  castPath?: string;
  title?: string;
  status?: string;
  className?: string;
  insight?: {
    label: string;
    title: string;
    meta: string;
  };
}) {
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>(FALLBACK_TERMINAL_LINES);

  useEffect(() => {
    let cancelled = false;

    fetch(castPath)
      .then((response) => (response.ok ? response.text() : Promise.reject(new Error('cast not found'))))
      .then((castText) => {
        if (!cancelled) {
          setTerminalLines(parseCast(castText));
        }
      })
      .catch(() => {
        // Keep the curated fallback if the cast is not available during local iteration.
      });

    return () => {
      cancelled = true;
    };
  }, [castPath]);

  return (
    <div
      className={`asterHeroVisual asterTerminalStage ${className || ''}`}
      aria-label="Animated terminal showing an Aster service being started and called">
      <div className="asterTerminalStage__glow" aria-hidden="true" />
      <div className="asterTerminalStage__mesh" aria-hidden="true" />
      <div className="asterTerminalStage__scan" aria-hidden="true" />

      <div className="asterTerminalChrome">
        <div className="asterTerminalChrome__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="asterTerminalChrome__title">{title}</div>
        <div className="asterTerminalChrome__status">{status}</div>
      </div>

      <div className="asterTerminalStage__body">
        <div className="asterTerminalCast">
          {terminalLines.map((line, index) => (
            <div
              key={`${line.text}-${index}`}
              className={`asterTerminalLine asterTerminalLine--${line.tone}`}
              style={{ animationDelay: `${index * 0.34}s` }}>
              <span className="asterTerminalLine__text">{line.text}</span>
              {line.suffix && <span className="asterTerminalLine__paste">{line.suffix}</span>}
            </div>
          ))}
          <span className="asterTerminalCursor" />
        </div>

        {insight && (
          <aside className="asterTerminalInsight">
            <span>{insight.label}</span>
            <strong>{insight.title}</strong>
            <em>{insight.meta}</em>
          </aside>
        )}
      </div>
    </div>
  );
}

function parseCast(castText: string): TerminalLine[] {
  const ansiPattern = /\x1b\[[0-?]*[ -/]*[@-~]/g;
  const output = castText
    .split(/\r?\n/)
    .slice(1)
    .filter((line) => line.trim() && !line.startsWith('#'))
    .map((line) => {
      try {
        const [, code, data] = JSON.parse(line);
        return code === 'o' ? String(data) : '';
      } catch {
        return '';
      }
    })
    .join('')
    .replace(ansiPattern, '')
    .replace(/\r/g, '')
    .split('\n')
    .map((line) => line.trimEnd())
    .filter((line) => line.trim().length > 0);

  const lines = output.map(toTerminalLine);
  return lines.length > 0 ? lines : FALLBACK_TERMINAL_LINES;
}

function toTerminalLine(text: string): TerminalLine {
  if (text.startsWith('$ aster call ')) {
    return {
      text: '$ aster call ',
      suffix: text.slice('$ aster call '.length).replace(/^(.{12}).+(.{4} Fleet\.status.*)$/, '$1…$2'),
      tone: 'prompt',
    };
  }

  if (text.startsWith('$')) {
    return { text, tone: 'prompt' };
  }

  if (text.startsWith('#')) {
    return { text, tone: 'comment' };
  }

  if (text.startsWith('@')) {
    return { text, tone: 'schema' };
  }

  if (text.startsWith('{') || text.startsWith('}') || text.trim().startsWith('"')) {
    return { text, tone: 'json' };
  }

  if (text.startsWith('aster')) {
    return { text, tone: 'endpoint' };
  }

  if (text.includes('No DNS.')) {
    return { text, tone: 'payoff' };
  }

  if (text.includes('Aster RPC')) {
    return { text, tone: 'hero' };
  }

  return { text, tone: 'code' };
}
