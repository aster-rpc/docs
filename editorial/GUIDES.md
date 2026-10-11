# Guide rollout outline

Readers: application developers extending a first service; operators preserving state and policy; reviewers tracing authority.

Status: all pages [lab]; source review does not qualify a clean-host walkthrough. Preserve existing examples, distinguish API fragments from complete applications. No public release-number framing.

Style: core.md/reference.md; stable slugs; prerequisites, scenario, expected outcome, failure, next step. Root owns diagrams.

## baseline-services [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## coordination [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## data [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## define-a-service [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## dial-a-service [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## expose [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## http [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## leases [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## mcp-integration [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## observability [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## operations [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## port-from-grpc [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## sealed-grants [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## services [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## topology [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## typescript-build-setup [lab]
- Outline: explain the task → prerequisites → existing mechanism/API → concrete verification scenario → failure and next step.
- src: SDK tag v0.3.893; released facade/core and binding implementation; existing page and PAGE_AUDIT.md.
- visual: existing tables; no new diagram needed.
- Disposition: comprehension pass complete; prerequisites, concrete verification scenario, outcomes, failure response, and onward links reviewed. Runtime/clean-host qualification remains open.

## Source evidence and dispositions — 11 October 2026

Baseline: SDK tag `v0.3.893`, checked using release extracts and `git show` in `aster-rpc-internal`. Global RTK/HISTER and SDK AGENTS read. Writing core/reference read; pilot PLAN/PAGE_AUDIT and lease rewrite read. All shell commands prefixed with rtk. No SDK edits, builds, commits, or deployment.

- services / define-a-service: corrected session ownership to `(connection_id, sessionId, service)`, following `aster/src/rpc/sessions.rs`; removed method-stream cleanup implication. Automatic retry now requires a policy. Canonical contract reference carries full hash inputs; codec-supported Python fields no longer imply all cross-language Fory combinations. Existing full service definitions retained and explicitly separated from standalone applications.
- dial-a-service: Python high-level admission distinguished from Rust/Go/.NET direct RPC paths; raw transport requires schema and codec. Constructor/unary shape inspected in `bindings/python/aster/transport/iroh.py`. Error vocabulary scoped to Python. Added allowed/denied call verification.
- port-from-grpc: removed universal no-codegen, endpoint-as-load-balancer, automatic sidecar/interceptor replacement, and universal discovery/admission claims. Preserved Greeter translation and added behavior/failure/rollback checks.
- baseline-services: `aster/src/rpc/baseline.rs` confirms NodeIdentity fields and generated NodeInfo contract. Added `NodeInfoClient::describe` integration fragment, expected description, and disclosure-denial check. Generated client usage follows the existing Rust quickstart macro pattern; new fragment not executed.
- leases: `core/src/lease.rs` confirms acquire arguments, default options, `AcquireOutcome`, `mutate_fenced` signature, release ownership, and FenceRejection error. `aster/src/lease.rs` contains matching acquire/release example. `aster/src/rpc/lease.rs` confirms grantor role defaults and authenticated caller binding. Added source-backed in-memory mutation fragment plus delayed-write/identity rejection scenario; no claim of standalone execution.
- coordination / data / topology / sealed-grants / HTTP / expose: preserved technical model and existing package pins; added required inputs, catalog/worker scenarios, observable success and failure distinctions. Kept missing executable assembly explicit instead of presenting prose as tested recipes. Removed public version-number framing and moving-main parity promises.
- operations: added restart/isolated-restore rehearsal and distinction between config-object resolution and wrapper/identity overrides. Preserved binding-specific identity-file caveat, admission failure policy, and shutdown order.
- observability: added greeting-call, collector, and readiness verification sequence. Retained existing source-inspected Python signatures and explicit lack of clean-host qualification.
- TypeScript build: corrected committed generated TypeScript still requiring compilation; added source/generated/emitted file and working-directory explanation; moved fallback limitations beside first mention.
- MCP: `cli/aster_cli/trust.py` accepts `producer|policy|ott`; corrected invalid `consumer` type to `policy`. `mcp/security.py` and `server.py` confirm local allow/deny visibility filtering, not unconditional credential-based method hiding. `mcp/schema.py` exposes `aster_max_items`, `aster_timeout`, `aster_items`; corrected old underscore controls. Removed unverified Claude settings-file path, preserved generic host config explicitly as a shape example.

## Open qualification and review gaps

All 16 guide pages remain [lab]. No new examples were executed and no clean-host walkthrough was performed. Existing quickstart qualification is not extended to these new fragments or scenarios. Root owns build/link/render and independent review.

1. Complete executable setup and teardown: voter genesis/join/authority/recovery; two-peer blob/document event delivery; pinned-author grant publish/import; HTTPS and WebTransport listener/authenticator/client assembly; peer exposure and public edge route registration. These are source-grounded integration guides with explicit assembly gaps, not qualified executable recipes.
2. Execute the new baseline-client and in-memory fenced-mutation fragments in a consumer project; verify generated type export and all error conversions against the actual downloaded crate pair.
3. Qualify four-pattern/session applications and denied-principal integration for each binding. Existing examples remain fragments where payload/helper definitions are absent.
4. Collector setup, readiness transition, persistent restart, consistent backup/restore, and upgrade/rollback require deployment host tests. No universal copy-directory failover or backup guarantee is claimed.
5. MCP server-stream source issue: `server.py` uses `async for` over `asyncio.wait_for(_collect_stream(...))`; `wait_for` returns a coroutine, so this appears invalid. Public guide flags runtime collection as requiring qualification and recommends bounded unary tools. Do not clear this limitation based on schema inspection. MCP host setup, restricted credential discovery/call behavior, and client-stream forwarding still need execution.

Validation: all assigned pages reread in full across reads and diff review; guide `git diff --check` passes. Stable frontmatter slugs preserved. Root to perform final cross-page voice, consistency, links, rendered inspection, and review dispositions.

## Lead review follow-up

Fixed typed-client import to `hello_service` and made the runnable consumer use its documented environment address; replaced stale base64 address placeholder. Removed the unsupported assertion that every shell command has a top-level equivalent and its speculative service/blob subcommands. Raw transport now explicitly registers both payload types. Tagged `transport/iroh.py` confirms this layer accepts `request` objects and encodes them internally; the native API beneath it accepts bytes. Constructor/codec signatures and top-level transport export inspected; no execution claimed.

MCP example now uses exported `any_of`, string role requirements, scoped typed handler placeholders, and the actual Hello schema without an invented greeting field. Migration example now exports TypeScript classes for scanning, explicitly opens development admission, treats metadata/interceptors separately from enrollment credentials, conditions NAT/relay connectivity, and requires runtime tests in addition to contract comparison. Generic guide descriptions replaced with concrete task descriptions. Re-read all changed passages; guide diff whitespace check passes.

## Integration follow-up and execution

Lead strengthened definitions for data, coordination, grants, exposure, HTTP
and observability. Global reviewer corrected unused concurrency metadata,
Python close hook/scheduled cleanup, and independent-language example schemas.
Lead compiled and ran new MemorySerializer and NodeInfo code in a public Rust
consumer, including released-fence rejection. This supersedes the earlier
unexecuted-fragment note; deployment/clean-host gaps remain. See ROLLOUT.md.
