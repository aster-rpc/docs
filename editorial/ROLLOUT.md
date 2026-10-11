# Public manual editorial rollout

Completed 11 October 2026. Scope: all 61 manual pages (15 foundations,
16 guides, 20 language pages, 10 tutorials/examples), shared diagrams,
sidebar wording, prompts, and downloadable checkpoint sources. Existing
unrelated changes preserved. No SDK edits, commits, pushes, or deployment.

## Reader-facing changes

Every assigned page was reread and updated for audience, purpose, definitions,
use case, prerequisites, expected behavior and next steps according to its
page type. Foundation pages provide reader journeys. Guides distinguish
content, replicated metadata, live messages and serialized authority. Language
pages explain ownership and their different generation/admission/session APIs.
Tutorials explain project files and expected results before detailed mechanics.

Removed Aster release-number qualifiers from narrative prose. Required package
pins, artifact URLs, service-contract version parameters and generated API
metadata remain. Internal source qualification still records the exact release.
The contract diagram now shows one method, request/response types, selected
fields, and a vertical nested-type reference with explicit arrowheads; role
labels are inside nodes so edges do not run through the labels. MissionControl
now labels session scope correctly and only simulates operational commands.

## Technical corrections and independent review

Three GPT-6.1 Sol agents owned disjoint writing partitions. Foundations and
languages independently reviewed each other's pages. Guides independently
reviewed the lead's tutorials, diagram and checkpoint archive. The languages
reviewer additionally reread the complete 61-page manual for consistency; the
lead read the guide changes and performed the final integration/voice pass.

Fixes applied:

- Session identity consistently includes connection, session ID and service;
  Python factories receive peer by name and register session classes.
- Python cleanup uses close(), with async cleanup scheduled; the unused
  max_concurrent_streams metadata no longer promises enforcement.
- Protected-looking Python examples explicitly disable permissive admission;
  configuration-object precedence is distinguished from wrapper overrides.
- Python delegated admission is not described as an implemented path. Direct
  credential admission and Rust/Go/.NET policy integration stay distinct.
- CLI syntax checked against source; unsupported top-level equivalents and
  config commands removed. Public installation remains separately qualified.
- Registry version records are not described as enforced immutable data;
  Rust binary payloads require the correct Fory byte annotation.
- gRPC migration separates replica selection, credentials and metadata and
  requires runtime tests rather than inferring compatibility from IDs alone.
- MCP schema controls, method visibility, role helpers and streaming limits
  corrected. Its source-level collection concern is retained as a limitation.
- MissionControl demos never execute arbitrary host commands; single-tail and
  in-memory limitations are stated, TypeScript classes export for generation,
  Node consumers clean up, relay configuration and sample responses corrected.
- User feedback persisted in docs/AGENTS.md and plan/maintenance records.

Verified/disagree: Python IrohTransport.unary does accept request objects and
encodes them using its codec; retained request= after source verification.
The contract diagram's vertical nested reference is semantically correct.

## Execution evidence

Internal package baseline: public Aster 0.3.893; installed source and downloaded
native artifacts from the earlier qualified examples. Host: Apple Silicon
macOS. Python 3.13.13, Node 24.13.1, Rust 1.96.0. This is a developer host, not a clean
host or a new cross-platform qualification.

Executed over actual Aster connections:

- Python Hello typed client and producer extracted from the revised page:
  Hello, World!
- Python producer to JavaScript dynamic client: Hello, JavaScript! Exact
  published method name preserved; no claim about untested payload shapes.
- Updated TypeScript first-service producer/consumer compiled and ran:
  Hello, World! Cleanup is now in finally.
- MissionControl Chapter 1 Python and compiled TypeScript producers both
  returned expected status to a Python client. Numeric representations differ;
  no identical-producer-contract claim made.
- Complete Python Chapter 4 producer with a consumer checked unary, server
  stream, client stream, bidi and isolation of two simultaneous sessions on
  one connection. Published as public/examples/mission-python.zip; Python
  3.10–3.13 required. Archive producer matches the visible complete block.
- Rust consumer harness compiled and ran the new lease and NodeInfo snippets:
  current mutation accepted, released fence rejected without mutation, and
  worker-7/eu returned from the baseline service.

Scratch execution records: /tmp/aster-editorial/{example-results.json,
typescript-results.json,mission-full-results.json}; cross-language harness
cross-test.py; Rust harness /tmp/aster-docs-refresh/rust-consumer/src/bin/docs_fragments.rs.
No mock transports or fake successful responses substituted for those runs.
Some successful document discovery emitted AlreadySyncing warnings; assertions
checked actual returned application data. These were not suppressed failures.

## Site validation

Astro build passed. Internal checker: 148 built manual/API pages, 12,844
internal links/assets, zero errors. External checker: 15 URLs, zero requiring
review. Whitespace check passed.

Whole manual: 244 browser checks (61 routes × light/dark × 390/1440 widths),
no page errors, overflow, missing H1 or diagram errors. Screenshots retained
under /tmp/aster-editorial/rendered. Inspected the corrected contract diagram,
home, data guide, JVM server and representative tutorial layouts. Final
changed-page verification passed 16 additional combinations after the last
diagram-label correction; inspected both final light-mobile and dark-desktop
diagrams to confirm labels and edges are separate.

## Remaining qualification and maintenance work

Editorial completion does not close these execution gaps:

- Full MissionControl CLI/enrollment/denial flow, TypeScript later chapters,
  cross-language metrics and prompt-harness execution; tutorial remains draft.
- Public CLI package/tooling compatibility, registry bootstrap and hosted
  service availability; references state prerequisites rather than assume them.
- Standalone deployment recipes for coordination genesis/recovery, grants,
  HTTPS/WebTransport, HTTP edges, protected policies and store restore.
- Complete per-language streaming/session and clean-host/platform matrix beyond
  the runs already recorded. Hosted generated catalogs remain Python/TypeScript.
- MCP server-stream collection requires a tested implementation; current source
  review identified an async iteration issue. No SDK fix was made here.
- Source-to-page manifest, automated impact reports and cross-repository release
  gates remain proposed in MAINTENANCE.md. The local deployment workflow runs
  the existing site checker before upload. No background schedule is installed.

Carry these as qualification tasks with source revisions and observed results,
not repeated release-number warnings in public explanations.

Final tutorial layout check: moved optional coding-agent panels below the main
learning flow and placed the subject explanation before qualification notes.
Eight additional page/theme/viewport combinations passed. Narrative scan found
zero Aster release-number qualifiers outside required code/artifact links;
61 of 61 inventory rows link to completed editorial reviews. Final build and
internal links/whitespace passed after these changes.
