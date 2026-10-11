# Language documentation rollout

Readers: application developers choosing a binding, implementing handlers, and calling peers; operators checking native ownership and protected admission.

Style: retain reference detail and stable slugs; lead with the task and ownership; link complete tested projects before API fragments. Keep version pins in install commands, and record source baseline internally. No new runnable examples or clean-host qualification is implied.

Baseline: SDK 0.3.893. Source: /tmp/aster-docs-parity/release and /tmp/aster-docs-refresh/release. Public runtime limitations remain explicit without release-framed prose.

## Outline

- `src/content/docs/docs/bindings/dotnet/client.mdx` [lab]: client workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/dotnet/server.mdx` [lab]: server workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/dotnet.mdx` [lab]: installation and workflow selection.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/go/client.mdx` [lab]: client workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/go/server.mdx` [lab]: server workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/go.mdx` [lab]: installation and workflow selection.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/index.mdx` [lab]: installation and workflow selection.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/java/client.mdx` [lab]: client workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/java/kotlin.mdx` [lab]: JVM reuse versus Kotlin generation.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/java/server.mdx` [lab]: server workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/java.mdx` [lab]: installation and workflow selection.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/javascript/client.mdx` [lab]: client workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/javascript/index.mdx` [lab]: installation and workflow selection.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/javascript/server.mdx` [lab]: server workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/python/client.mdx` [lab]: client workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/python/index.mdx` [lab]: installation and workflow selection.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/python/server.mdx` [lab]: server workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/rust/client.mdx` [lab]: client workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/rust/server.mdx` [lab]: server workflow, ownership, streaming, sessions, and policy.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.
- `src/content/docs/docs/bindings/rust.mdx` [lab]: installation and workflow selection.
  src: released binding/runtime implementation, existing quickstart and API fragments.
  visual: existing reference tables/diagrams; no additional artwork needed.
  disposition: edited and reread for reader workflow, ownership, and voice; source evidence and remaining qualifications below.

## Source evidence and per-page disposition

Source inspection used `v0.3.893` in the SDK checkout after reading its AGENTS.md,
and the extracted baseline `/tmp/aster-docs-parity/release`. This is source
verification, not new consumer execution. Existing examples and installation
pins are retained. No claim of new clean-host qualification is made.

| Page | Editorial disposition | Source evidence | Remaining qualification |
| --- | --- | --- | --- |
| bindings/index | Added build workflow comparison and evaluation/deployment routes; retained binding differences | Binding runtime files listed below; existing quickstarts | Public Go vanity installation and broader platform qualification |
| bindings/rust | Added define → register → connect workflow and feature motivation; removed duplicate tutorial link | aster/src/rpc/runtime.rs; aster Cargo features; existing Rust tutorial | Clean-host deployment beyond tutorial |
| bindings/rust/server | Preserved reviewed pilot; removed public baseline framing; retained ownership and policy distinctions | aster/src/rpc/runtime.rs register_session, attributes, run, shutdown | Executable protected admission and full stateful/streaming examples |
| bindings/rust/client | Added caller/node ownership and pattern use cases; retained typed/raw boundaries | aster/src/rpc/client.rs and runtime.rs; existing Rust tutorial | Incremental/session walkthrough execution |
| bindings/go | Put pinned-source project before installation detail; explained CGO role | bindings/go/rpc_client.go, rpc_server.go; existing pinned-source tutorial | Vanity module install remains unqualified |
| bindings/go/server | Explained server/application ownership and handler choices | bindings/go/rpc_server.go StartServer/Close; bounded waits and caller-owned gate | Signal shutdown and protected gate recipes still need execution |
| bindings/go/client | Distinguished client registration from hosting; scoped upload/chat fragments | bindings/go/rpc_client.go and client_interceptors.go | Complete upload/chat/session projects |
| bindings/java | Added generated/manual/native responsibility table; linked complete project first | JVM DispatcherEmitter.java; ForyCodec; runtime package setup in tutorial | Full additional-platform native loading |
| bindings/java/server | Explained generated unary vs manual streams and application ownership | JVM DispatcherEmitter.java throwing streaming stubs; AsterServer.java | Complete client-stream/bidi/session application |
| bindings/java/client | Added call workflow; placed no-op session close at first instruction | JVM ClientSession.java close; AsterClient.java | Session resource reclamation walkthrough |
| bindings/java/kotlin | Distinguished executable Java-contract reuse from Kotlin KSP setup | JVM shared emitter; existing KotlinMain tutorial source | Kotlin-declared KSP build is not a qualified runnable path |
| bindings/dotnet | Put native prerequisites next to package introduction; explained application fit | .NET AsterServer.cs/AsterClient.cs; existing native setup tutorial | Platform native loading beyond tested project |
| bindings/dotnet/server | Explained ownership and method choices; retained async session disposal limit | AsterServer.cs DisposeSession schedules DisposeAsync without awaiting | Awaited application cleanup and protected-gate walkthrough |
| bindings/dotnet/client | Added connect/call/dispose workflow; scoped stream fragments | AsterClient.cs; native connection wrappers; existing tutorial | Complete upload/chat/session projects |
| bindings/python/index | Replaced status-first opening with async application and ownership flow; added task table | bindings/python/aster/runtime.py AsterServer/AsterClient; existing wheel tutorial | Cross-platform and clean-host qualification |
| bindings/python/server | Corrected start/serve explanation; added lifecycle table; put protocol permissions beside unified-node claim; explicit protected flag in identity examples; config inspection scoped to object | runtime.py start, serve, __aenter__, allow_all_producers rejection | Provisioned protected producer and stateful cleanup walkthrough |
| bindings/python/client | Led endpoint/admission/typed-call flow; explained direct-RPC boundary; aligned address keyword and per-input config precedence | runtime.py AsterClient init/connect/open_session and client.py timeout conversion | Native Rust lower-level consumer integration and protected credential execution |
| bindings/javascript/index | Explained Node task, generated metadata, and typed/proxy choice | TypeScript runtime.ts; client.ts; existing generated tutorial project | Broader native platforms and full dynamic-client contract validation |
| bindings/javascript/server | Added server/application ownership, prerequisites and lifecycle table | runtime.ts start/serve/close; Rust starts serving during start | Complete stateful factory/lifetime recipe and standalone shutdown execution |
| bindings/javascript/client | Led typed workflow; scoped dynamic assertion and streaming fragments; added finally closure | client.ts bidi return; transport/iroh.ts openSession/close; runtime.ts wrapper | Fully assembled bidi schema/codec project and sibling-session execution |

No new hidden `verify:` notes were added: unresolved qualification is explicit
in this ledger and API fragments identify their missing application context.
Known API limitations stay beside their public instructions. No build, commit,
push, source-code mutation, or deployment was performed by this writer.

Validation: all 20 pages reread for workflow/voice; code fragments retained with
scoped prerequisites. MDX fence balance and every manual /docs/ link target
checked against declared slugs; no errors. Scoped git diff --check passed.
Rendering and independent final review are the lead editor's integration step.

## Independent foundations review

Read all 15 current home/concepts/overview/reference pages after language edits.
Fix findings sent to lead and foundations writer: Rust binary payload paragraph
needs Fory bytes annotation; trust integration table should include TypeScript
and JVM high-level consumer admission; transport's delegated `aster.admission`
Python success claims contradict tagged runtime's explicit unsupported warning.
Canonical encoder/payload separation, connection/session/service identity, and
configuration wrapper table otherwise agree with inspected source. Review made
no changes outside this writer's owned language pages/ledger.

Independent language reviewer found one additional clarity issue: session
registration needs the decorated class and peer-accepting constructor. Fixed
Python server services/session instructions and added a scoped registration
fragment, checked against released Server.__init__ and dispatch factory setup.

## Global consistency review

Read all 61 manual-page prose and sidebar entries; checked recurring admission,
identity, session, encoding, codegen, and qualification claims. Reported residual
fixes to lead: MissionControl Python session-class registration/text; unsupported
IROH_RELAY_URL example; unenforced max_concurrent_streams metadata; Python
on_session_close hook mismatch (runtime invokes close and schedules async cleanup);
TypeScript first-service finally cleanup; separate-language tab schema caveat.
Release-number search found only install pins and artifact URLs. Original P0
mental-model conflicts are mostly corrected in public prose; full CLI, stateful,
protected, and recovery execution remains deferred rather than claimed complete.
