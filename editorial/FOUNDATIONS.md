# Foundations rollout

Readers: evaluator choosing a network model; builder connecting typed services; operator preserving identity and enforcing policy; security reviewer tracing trust.

Style: explain the application problem before protocol mechanics; retain stable slugs and useful descriptor/field reference. Public prose uses present-tense behavior and limitations. Package pins remain executable; release evidence stays here. All pages are [lab]: editorial/source review is not clean-host qualification.

| Page | Outline | src: | visual: |
| --- | --- | --- | --- |
| Home | Changing-network application → capabilities → four reader entry points → build | Released facade, runtime, bindings | Existing SDK layers |
| What is Aster | Remote worker and operator → identity/calls/data/authority → language choice | Released facade modules, Python runtime | None |
| Why Aster | Requirement → mechanism → operating condition → evaluation | Transport, contracts, runtime | Decision table |
| Aster vs gRPC | Deployment needs → fair comparison → selection checklist | Existing comparison; released transport | Comparison table |
| Contract identity | Catalog rollout → changes/limits → canonical descriptor reference | core contract/canonical; facade contract | Existing contract graph |
| Discovery | Explicit address vs registry → membership/bootstrap → resolution → internals | Python registry client/publisher/models | Choice table |
| Serialization | Payload agreement → three encoding layers → wire type → limitations | Python codec; RPC codec/framing | Encoding table |
| Sessions | Two sessions on one connection → isolation/concurrency → lifetime | Released RPC runtime; binding session owners | Isolation table |
| Transport | Identity/address/path → protocol routing → network conditions → tuning | Released config/ticket; Python runtime | Root owns protocol diagram |
| Trust | Admitted and denied calls → stages → binding setup → resource authority | Released admission/runtime/capability APIs | Request decision table |
| Architecture | One call from wrapper to handler → layers/ownership → protocols/framing/data | Released runtime and Python dispatcher | Existing diagrams |
| Configuration | Persistence/access use case → object resolution vs wrapper overrides → selected fields | Released Python config/runtime and native config | Precedence table |
| CLI | Local vs remote tasks → install qualification → commands → hosted service boundary | Tagged cli pyproject/parser/modules | Task table |
| Compatibility | Package/ABI/workflow choice → evidence scope → limitations → test contract | Existing release qualification records, tagged bindings | Matrix |
| API | Find installed signature → generated catalog boundaries → direct language references | Generated version record, Cargo consumer semantics | Reference table |

Evidence baseline: tag v0.3.893 in /Users/emrul/dev/aster/aster-rpc-internal; source crates /tmp/aster-docs-refresh/release/aster-0.3.893; extracted binding sources /tmp/aster-docs-parity/release. No SDK main claims. No build, commit, deployment, or new example execution in this partition.

Disposition: all 15 owned pages reread and edited. Prose review and targeted source inspection complete; independent review, build, link check, rendered QA, and walkthrough qualification remain separate lead tasks. No page is promoted to live by this work.

## Final page dispositions

| Page | Completed editorial change | Evidence / remaining test need |
| --- | --- | --- |
| Home | Four reader entry cards; retained feature/try/operate journeys; removed release-number framing | Facade feature boundaries and existing links; lead render cards in both themes/mobile |
| What is Aster | Remote-worker example connects calls, content, observations, and fenced authority; enrollment claim scoped | Released facade modules and runtime; conceptual example, no execution claim |
| Why Aster | Requirement/mechanism/operating-condition table; decorator fragment labeled | Contract/runtime APIs; evaluate actual network/payload workload |
| Aster vs gRPC | Fair deployment comparison retained; concrete selection conditions added | Existing comparison reviewed; no benchmark or interoperability performance claim |
| Contract identity | Rollout change table before encoding details; pilot detail preserved | Existing pilot core contract/canonical review; released facade contract structs; no new runnable rollout |
| Discovery | Address-vs-registry prerequisites; Python metadata path scoped; version immutability corrected to convention; exact gossip enums and ArtifactRef format | Tagged registry client/publisher/models and runtime _publish_contracts/_ensure_registry_doc; complete publish/join/resolve walkthrough still needed |
| Serialization | Three encoding layers; Python bytes/Rust Vec<u8> binary mapping; registration/compatibility limits | Tagged codec.py and released facade contract.rs mapping; paired binary/optional/nested payload execution still needed |
| Sessions | Two-session isolation table, concurrent access explanation, binding cleanup links and JVM close limit | Released server/runtime and existing JVM qualification; two-session cleanup walkthrough per binding still needed |
| Transport | Identity/hints/path example; removed Python producer-admission claim; data ALPN constants instead of false literal names; lifecycle fragment scoped | Tagged runtime.py rejects producer admission; released admission.rs retains Rust constants; clean network/path testing remains deployment-specific |
| Trust | Allowed/denied call trace; integration choice table; independent root and verified attributes emphasized | Released dispatcher/auth/admission plus tagged Python runtime; complete protected deployment with negative tests remains required |
| Architecture | End-to-end call trace before layers; handler/runtime ownership and concurrent mutation responsibilities | Released RPC runtime/server/codec plus tagged server.py/_dispatch architecture; root owns diagram QA |
| Configuration | Separate object resolution and wrapper precedence; persistent key default; secret_key_file field; schematic samples and development handling corrected | Tagged config.py/runtime.py; native config resolution; table-vs-installed resolved config and restart/negative-admission execution still needed |
| CLI | Local/peer/registry task table; installation qualification; corrected parser syntax; removed nonexistent config show; manifest coverage limitation; hosted service prerequisites | Tagged CLI parser/modules/pyproject/runtime startup check; matching public CLI install and hosted-registry walkthrough remain unqualified |
| Compatibility | Package/API/workflow distinction; version framing removed; retained concrete generator/session/Node ownership limits | Existing baseline qualification and tagged binding sources; public full per-platform RPC matrix evidence remains missing |
| API | Correct consumer cargo doc command; generated version record link; navigable language reference routes and honest missing hosted catalogs | public/api/version.json and existing generated catalogs; rustdoc generation command not newly executed |

## Exact source evidence

Baseline SDK tag v0.3.893 resolves to `1b54657547bafd97910f5f03c5327b20729e7344`.
Source files read from the tag (extracted under /tmp/aster-foundations-evidence):

- bindings/python/aster/config.py: config constructors, selected fields, file/identity behavior, print masking.
- bindings/python/aster/runtime.py: AsterServer/AsterClient precedence, producer-admission rejection, dev admission, manifest startup checks, registry publication/join, _with_node_identity persistence.
- bindings/python/aster/server.py and codec.py: dispatcher ownership, default session limit, payload mode and wire registration behavior.
- bindings/python/aster/registry/{client,publisher,models}.py: freshness/filtering, mutable set_bytes version pointer (append-only by convention), ArtifactRef collection_format, gossip enum names.
- cli/pyproject.toml, cli/aster_cli/{main,contract,trust,enroll,join,publish,access,aster_service,profile}.py: actual parser and registry prerequisites. enroll inspected directly via git show.
- Released facade src/{admission,config,ticket,node}.rs and src/rpc/{runtime,server,codec,contract}.rs: protocol constants, dispatcher/session boundaries, wire layer and binary type mapping. Pilot canonical evidence remains in PLAN.md.

## Cross-page corrections sent to lead

- CLI `trust sign` takes no positional consumer; use `--type policy --attributes JSON`; expiry is ISO8601 (default +30 days). `trust keygen --out-key root.key` also writes root.pub.
- `enroll node` takes --capabilities and comma-separated --attributes, and accepts relative expiry. Pair endpoint key/credential output and protect it.
- `access grant SERVICE CONSUMER --role ROLE`, revoke/list positional service; verify code positional. `aster config show` is absent from tagged parser.
- CLI registry address uses ASTER_SERVICE_ADDR; high-level producer registration uses ASTER_SERVICE_ADDRESS. These are distinct source behaviors.
- Producer admission is unavailable in Python runtime, while Rust facade constants still exist; do not describe universal removal.
- Registry version pointers have append-only convention, without immutable write enforcement.

## Remaining truthful gaps

No matching public CLI distribution or clean-host CLI procedure was qualified. Hosted @aster availability and email delivery were not verified. No complete protected deployment, registry bootstrap recipe, or two-binding payload/session workflow was executed by this partition. Public full per-platform matrix evidence and hosted Go/JVM/.NET signature catalogs are not available in these pages. These are explicit boundaries rather than implied finished workflows. No new hidden verify notes were introduced.

Validation performed: every owned page reread after substantive edits; release-framing scan clean; git diff --check passed. Lead must build/check links, independently review, and inspect rendered pages before publication. No builds, commits, deployments, SDK mutations, or source-main claims.


Independent language review correction: serialization now states that Rust ForyStruct payload fields need #[fory(bytes)] alongside the contract derive binary mapping. Linked Rust payload guidance.

Independent review integration: trust integration table now includes TypeScript and separates JVM high-level consumer admission from Go/.NET explicit gate wiring. Both reviewer findings fixed; no disagreement.

Independent review critical correction: transport no longer lists delegated aster.admission as supported Python protocol. Tagged runtime.py _warn_if_delegation_configured (893–923) explicitly says unregistered/no handler/tokens cannot admit. CLI access section now distinguishes registry records from Python direct admission. Fixed, not deferred.

## Independent language-partition review

Read all 20 language pages (index; Rust/Go/Java/.NET/Python/TypeScript introductions; all six server/client pairs; Kotlin). Reviewed reader handoffs, lifecycle, payload mapping, direct versus consumer-admission paths, session identity, cancellation, native ownership, package setup, and generator limits.

Fix reported: Python protected-looking TOML/identity-only server fragment omitted explicit wrapper allow_all_consumers=False, allowing ephemeral config-root development handling to open admission; language writer reports correction. Fix requested: Python server services input description must include session classes/factories as well as shared instances, with a minimal scoped registration fragment. No other material contradiction found in the reread. This review is editorial and targeted source comparison, not clean-host execution.

Final partition check after independent corrections: owned paths pass whitespace check. A concurrent whole-tree check reports MissionControl trailing whitespace; lead informed. No builds or publication performed.
