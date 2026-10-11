# Public documentation refresh

## Readers

- Evaluators: understand the SDK and run a small Rust or Python/TypeScript service.
- Application developers: select a binding, compose RPC and data protocols, and know the compatibility boundaries.
- Operators and security reviewers: configure identity, authorization, persistence, and failure handling.

## Scope and evidence

Edit the current Astro sources and preserve existing URLs and local migration changes. Baseline: public 0.3.893, checked anonymously on 2026-10-11. Compare feature claims with the downloaded release source and the SDK working tree; uncommitted parity additions do not establish released support. No deployment is part of this change.

## Plan

1. Inventory every page and collect code evidence.
2. Add Rust onboarding, language entry points, compatibility, and missing feature guides.
3. Reconcile trust, serialization, architecture, and operational claims; retain tutorial URLs.
4. Build; check rendered internal routes and anchors, external URLs, and examples.
5. Inspect desktop/mobile light/dark pages and review the complete content for consistency.

## Style and status

Follow /Users/emrul/dev/ai/documentation_writing/core.md. Retain Starlight slugs to preserve URLs. Tables compare APIs; use an accessible theme-aware SVG for the SDK layers. Existing diagrams remain where useful. [lab] means documentation awaiting clean consumer validation; it is not a claim that the underlying feature is unreleased. Mark tutorials visibly until validated. Avoid a blanket parity claim.

## Page outline

- **docs/bindings/javascript/client.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/bindings/javascript/index.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/bindings/javascript/server.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/bindings/python/client.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/bindings/python/index.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/bindings/python/server.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/concepts/contract-identity.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/concepts/discovery.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/concepts/serialization.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/concepts/session-scoped-services.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/concepts/transport.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/concepts/trust-model.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/examples/cross-language.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/examples/data-heavy-row-mode.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/examples/hello-service.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/guides/define-a-service.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/guides/dial-a-service.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/guides/mcp-integration.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/guides/observability.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/guides/port-from-grpc.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/guides/services.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/guides/typescript-build-setup.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/overview/aster-vs-grpc.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/overview/what-is-aster.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/overview/why-aster.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/quickstart/first-service.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/quickstart/mission-control.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/quickstart/python.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/reference/api.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/reference/architecture.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/reference/cli.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **docs/reference/configuration.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **index.mdx** [lab] — audit existing purpose, examples, and claims.
  - src: current page; SDK public APIs and tests for the named feature.
  - visual: retain existing diagrams/tables, inspect both themes.
- **Rust service in one process** (`docs/quickstart/rust`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Rust dependencies and native access** (`docs/bindings/rust`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Go runtime and delivery** (`docs/bindings/go`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Java and Kotlin runtime** (`docs/bindings/java`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **.NET runtime** (`docs/bindings/dotnet`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Release and language boundaries** (`docs/reference/compatibility`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Blobs, documents, and gossip** (`docs/guides/data`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Replicated coordination and durable results** (`docs/guides/coordination`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Fenced single-writer access** (`docs/guides/leases`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Locality and placement observations** (`docs/guides/topology`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Recipient-specific namespace grants** (`docs/guides/sealed-grants`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **HTTPS and WebTransport RPC** (`docs/guides/http`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Expose an existing HTTP service** (`docs/guides/expose`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Node identity and topology services** (`docs/guides/baseline-services`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.
- **Persistence, shutdown, and deployment checks** (`docs/guides/operations`) [lab]
  - src: SDK docs/aster-*-getstarted.md, aster/src/, bindings/, release 0.3.893 crate, tests/interop/.
  - visual: concise API/behavior table; no decorative illustration.

## Implementation and evidence (11 October 2026)

Completed: 15 new manual pages; home and sidebar rebuilt around readers and tasks;
release-bound language setup; refreshed Python and TypeScript API references;
trust/session/serialization corrections; page descriptions and heading cleanup;
responsive SVG; repeatable rendered-link and API-generation scripts. Existing
public manual slugs and removed-symbol API URLs are preserved.

### Source map

| Area | Primary evidence |
| --- | --- |
| Release | Anonymous Cargo index and downloaded `aster` 0.3.893 source; Python wheel listing; Maven POM and NuGet feed |
| Rust onboarding | Released `src/node.rs`, `src/rpc/runtime.rs`, generated service API; actual scratch consumer build/run |
| Rust payloads/features | Released Cargo manifest and macro behavior; SDK `docs/rust-sdk-consumer-guide.md` |
| Data | Released `src/blobs.rs`, `src/docs.rs`; scratch add/read/set execution; SDK data tests and known issues |
| Trust | Released `src/rpc/auth.rs`, `src/rpc/server.rs`, config and admission code; installed Python/TypeScript runtime |
| Coordination | Released `src/coordination/client/` journal/engine and host implementation; SDK coordination walkthrough and tests |
| Leases | Released `src/lease.rs`, `src/rpc/lease.rs`; SDK lease enforcement guide |
| Topology/grants | Released `src/topology.rs`, `src/grants.rs`; SDK topology and grant guides |
| HTTP/expose | Released RPC transport integration; SDK `aster-transport-salvo` and `aster-expose` implementations; newer foreign wrappers are not claimed as released |
| Binding delivery | SDK manifests, package feeds, and exact installed Python/TypeScript 0.3.893 artifacts |
| API references | `aster.public` and `dist/public.d.ts` from installed 0.3.893 packages; provenance in `public/api/version.json` |

### Walkthrough results

- Rust 1.96.0, Apple Silicon macOS, fresh Cargo project and published registry:
  compile/run passed, `Hello, Rust!`; blob add/read and document set snippets
  also compiled and ran. No workspace path dependencies or registry token used.
- Python 3.13.13, isolated venv, public macOS wheel: separate producer/consumer
  passed, `Hello, World!`. Explicit permissive admission is shown on the page.
- TypeScript 5, public Forgejo npm package, generated metadata: compilation and
  separate producer/consumer passed, `Hello, World!`, on Node 22.23.3 and 26.3.0.
  Found and documented the standalone native-event-loop lifetime workaround;
  consumers now pass generated metadata and use a typed client.
- These are isolated consumer projects on an existing macOS host, not fresh
  Linux/Windows hosts or an exhaustive network/interop test matrix.

### Site validation

- Astro production build passes. Existing Astro/Vite module-directive warnings
  remain; they do not prevent rendering or search.
- 135 manual/API HTML pages: 10,370 rendered internal links/assets pass, including
  fragment targets. All 15 external destinations pass.
- 28 representative manual page/theme/viewport combinations rendered with no
  JavaScript errors, failed Mermaid diagrams, or page-level horizontal overflow.
- All 48 manual routes checked at phone width for overflow; API pages checked at
  phone/desktop widths in both themes. Inspected screenshots, including the
  responsive SDK diagram. Screenshots and command evidence are in
  `/tmp/aster-docs-refresh/` on the working machine.
- Pagefind returns the coordination guide for `coordination`.
- The API generator reports one unresolved upstream `DynamicTypeFactory` comment
  link. TypeDoc renders it as text; the emitted links pass validation. The symbol
  is outside the curated public entry point and was not added as a public API.

### Remaining boundaries

- MissionControl remains visibly a draft walkthrough pending complete consumer
  execution. The downloadable agent briefs also remain drafts; this run did not
  validate an autonomous coding harness from those prompts.
- Feature guides were checked against code; full multi-node coordination recovery,
  HTTP/WT deployment, Java/.NET consumer execution, and Go public delivery were
  not newly qualified by this documentation change.
- Existing binding parity work remains in the SDK working tree. This change does
  not label all current-source APIs as present in 0.3.893 or claim complete parity.
- This run used a source/consistency self-review and executable checks. A separate
  human/model editorial review and deployed-site check remain release steps.
- No commits, pushes, or deployment. Existing user changes in this repo and the
  SDK/website repositories were preserved.

## Follow-up: diagrams and language navigation

Compared the local kasm-session-runtime and kasm-nix-registry diagram components.
Adopted their restrained accent fills, explicit boundaries, readable SVG text,
and shared styling. Added build-time protocol and unary-call diagrams, reused
the protocol map in the Python server guide, aligned existing diagram styling,
and connected both transport branches in the mobile SDK diagram. Remaining
Mermaid sequence diagrams now use a matching theme-aware palette.

Grouped the sidebar by language and added a documentation coverage page.
Python/TypeScript's dedicated server/client references are inherited coverage;
the other languages also support both roles. Rust has a tested combined
tutorial. Full Go/JVM/.NET public setup and server/client guides remain a
documentation backlog, distinct from implementation parity or release status.

Validation: Astro build, 136 manual/API pages and 10,547 internal links/assets
passed. Browser checks covered 28 general page/theme/viewport combinations and
20 focused combinations for diagrams and language pages, without page overflow
or JavaScript errors. Inspected SVG screenshots in light/dark themes and at
390px/1440px widths. No SDK changes or publication.

## Language documentation parity plan

Readers: application developers implementing a server, integrating a client,
or operating a binding against the matching native release. Entry points are
each language overview, its server/client guides, and complete examples.

Outline: add Rust, Go, JVM, and .NET server/client guides covering setup,
service registration, lifecycle, four RPC patterns, sessions, admission,
deadlines/cancellation, errors, resource ownership, and telemetry. Reconcile
Python/TypeScript coverage and expose the same navigation for all languages.
Status: [lab] until examples are executed; distinguish API-reference fragments
from tested tutorials and package distribution from functional capability.
src: v0.3.893 binding sources, native Rust facade, binding tests and consumer
assurance harnesses; compare working-tree additions only to identify exclusions.
visual: existing protocol and call diagrams linked from shared concepts; no
new diagrams required for API-specific reference pages.
Validation: compile/run extracted examples where toolchains and release natives
are available; build/link/browser checks; independent second review per core.md.

### Language parity result and evidence

Added eight dedicated server/client references (Rust, Go, JVM, .NET), three
complete first-service tutorials (Go, JVM, .NET), and a Kotlin application
guide. All six language groups now expose overview/server/client/tutorial
entry points. Public downloads contain source/config only in hello-go.zip,
hello-jvm.zip, and hello-dotnet.zip. Coverage index now describes the actual
release differences instead of missing server/client chapters.

Sources: pinned v0.3.893 SDK source and published packages. The public Go
source revision 54631e28d90e23264ee3e9affa9f026999505414 has identical Git blobs
to the release's bindings/go subtree. Downloaded public native osx-arm64
archive is byte-identical to the native in the matching Maven classifier.
Go1.27.1 ran unary + three streamed replies; .NET SDK10.0.301/runtime9.0.4
ran the same using public NuGet and explicit native copy; JDK25.0.2/Maven3.9.6
ran generated unary + manual server-stream dispatch from public Maven packages;
Kotlin2.4.0-Beta1 ran the shared JVM contract successfully. These are fresh
consumer projects on this macOS ARM64 host, not clean-host/cross-platform
qualification. Per outline status, tutorials remain [lab] under the strict
clean-host definition; published pages state the exact execution scope.

Independent second review completed per documentation_writing/core.md. Fixes:
JVM streaming generator stubs documented with working manual dispatcher; JVM
ClientSession.close no-op documented; Go bounded shutdown waits clarified;
.NET async session disposal not awaited clarified; Rust secret-key file
distinguished from credential TOML. Corrected stale TS call options, admission
default, unsupported session helper, bidi declarations and shared ownership;
corrected Python producer admission, obsolete dispatch lifecycle, unsafe
protected example assumptions, and added timeout/session documentation.
Reviewer also checked tutorial code against downloadable ZIP contents.

Defer: additional end-to-end client-stream/bidi/session applications and hosted
generated catalogs beyond Python/TypeScript; all patterns are covered in the
new task-oriented references, but only the stated walkthroughs were executed.
Disagree/verified: Rust Vec input streaming shapes, explicit session APIs,
Go iterator cleanup, and .NET connection/type-registration/session signatures
were verified and retained. No claimed cross-platform or full matrix rerun.

Build/link checks: 148 manual/API pages, 12,580 internal links/assets, and
14 external URLs passed. No SDK code changes, commits, pushes, or deployment.

Final browser verification: 68 page/theme/viewport combinations passed with
no JavaScript errors or page overflow; inspected language index in desktop
dark and mobile light layouts. Final whitespace check passed.


## Comprehension and maintenance overhaul

The continuing plan is editorial/PLAN.md, with a complete manual-page audit in
editorial/PAGE_AUDIT.md and the release-aware maintenance process in
editorial/MAINTENANCE.md. Three Sol agents supplied independent audits. The
contract identity, fenced leases, and Rust server pages are representative
rewrites for the agreed early editorial checkpoint. Their technical review,
validation evidence, deferrals, and remaining automation work are recorded in
the continuing plan. This pilot does not mark the whole-site overhaul complete.


## Approved full editorial rollout

Completed all 61 manual pages following user acceptance and diagram/version
framing corrections. editorial/ROLLOUT.md records section ownership, independent
review, executed examples, browser/link checks, and remaining qualification.
AGENTS.md now preserves the user’s voice and maintenance rules for future work.
All changes remain local; no publication or source-impact automation implied.
