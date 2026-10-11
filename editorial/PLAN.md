# Documentation comprehension and maintenance overhaul

Status: 61-page inventory complete; three representative rewrites reviewed and validated. Public documentation
baseline remains 0.3.893; do not silently follow SDK main. Nothing published.

## Readers and journeys

- Evaluator: understand the problem Aster solves and its limits; enter at home.
- Application developer: run a service, then add capabilities as needed; enter
  through Choose a language and the matching first-service tutorial.
- Security reviewer: understand identities, admission, authorization, and data
  capabilities; enter through the trust model.
- Operator: preserve state, diagnose failures, and upgrade safely; enter through
  operations and release compatibility.

## Execution and checkpoint

1. Audit every manual page and journey in PAGE_AUDIT.md (Sol reader auditor).
2. Verify release facts for representative pages (Sol technical auditor).
3. Establish change-triggered maintenance in MAINTENANCE.md (Sol maintainer).
4. Rewrite and render the three model pages below (lead editor).
5. Independent review: classify findings as fix, defer, or disagree.
6. User reviews the concrete model pages before broad editorial rollout.
7. After editorial acceptance, work in batches: foundations, services, data,
   security, operations, language guides/reference. Lead performs final voice
   pass; separate reviewers assess explanation and technical accuracy.
8. Validate each batch and all reader journeys; reconcile the original inventory.

The user accepted this early editorial checkpoint to reduce rework. Audit,
source mapping, and maintenance design can proceed independently of feedback.

## Model-page outline

- Contract identity [lab]: explain interface agreement using a service rollout,
  then contract IDs, consequences of changes, and canonical encoding details.
  src: released Rust contract implementation and existing technical reference.
  visual: existing contract dependency diagram, introduced after the use case.
- Fenced leases [lab]: explain a replaced worker making a late write, then
  ownership, resource enforcement, renewal/loss, and grantor choices.
  src: released lease serializer, holder, grantor and resource APIs.
  visual: compact timeline table showing takeover and rejection.
- Rust server [lab]: explain the server's job and ownership, connect tutorial
  types to registration, then explain streaming/session/admission choices.
  src: released Rust server facade and RPC macros; existing tested quickstart.
  visual: tables for decisions and lifecycle; no decorative diagram needed.

Lab denotes incomplete clean-host walkthrough qualification, not planned SDK
functionality. Public copy states actual behavior and validation limits. Exact package/source
versions remain in executable setup and internal evidence, per user feedback.

## Acceptance criteria

Every substantive page explains its subject and use case, introduces or links
prerequisites, provides an appropriate concrete example and result, places
limitations beside claims, and supplies a useful next step. Reference pages
can link explanations instead of repeating tutorials. Preserve stable URLs and
existing technical detail unless source evidence requires correction.

Evidence records must distinguish source inspection, executed examples,
clean-host qualification, rendered inspection, and independent review. A
passing build is not evidence that a guide works. Open questions stay visible
in the editorial ledger; unverified promises stay out of public prose.

## Maintenance requirements

Track source revision and package/native compatibility separately from the
last editorial edit. Source changes create review candidates; they cannot
prove prose accuracy. Every release needs an explicit docs disposition and
reviewed baseline. Keep development changes in the internal review queue until
corresponding packages and examples are qualified. Scheduled sweeps supplement
change-triggered review. See MAINTENANCE.md for actual integration points and
which automation is installed versus proposed.

## Pilot evidence — 11 October 2026

Three GPT-6.1 Sol agents audited reader journeys, maintenance integration, and
release facts. The lead edited the three model pages and integrated review.

Fix: canonical encoding described as dedicated Aster encoding; recursive edges
use named SelfRef; field IDs/NFC handling and role requirements clarified;
Rust run consumes ownership; grantor authorization defaults included; repeated
contract explanation removed. Reviewer re-read actual edited pages.
Defer: runnable lease walkthrough and full streaming/session applications;
these model pages use a takeover timeline and explicitly scoped API fragments.
Disagree: none. The reviewer verified payload names and takeover ordering.

Technical evidence: 0.3.893 contract/lease implementation and Rust RPC facade,
reviewed against core/src/contract.rs, core/src/canonical.rs, core/src/lease.rs,
aster/src/rpc/contract.rs, aster/src/rpc/lease.rs and aster/src/rpc/runtime.rs.
Current server.rs includes newer restrictions; those were excluded from claims.

Validation: Astro build and internal checker passed (148 built manual/API
pages, 12,594 internal links/assets); git diff --check passed. Twelve browser
combinations (three pages, light/dark, 390/1440 widths) passed with no page
errors or overflow. Inspected rendered mobile contract and desktop dark lease
pages. Browser evidence is local at /tmp/aster-editorial. No new execution or
clean-host qualification of SDK examples is claimed for this prose-only pilot.

Local deployment workflow now invokes the existing check:docs after build and
before artifact upload. Source impact reporting, source-map population, and
cross-repository release gates remain proposed in MAINTENANCE.md. No background
schedule was installed; no commits, pushes, SDK edits, or publication occurred.

Next checkpoint: user reads the three local model pages and provides editorial
feedback before the broad rewrite. Continue from PAGE_AUDIT.md; its pending
contradictions and gaps are not fixed merely because a model page is complete.

Maintenance second review: fixed the illustrative mapping to include the core
contract/canonical encoder, and separated pre-publication disposition from
post-publication consumer qualification and post-deployment inspection to
avoid a circular release gate. Installed/proposed distinctions verified.

Inventory completion: 61 manual pages reviewed for comprehension and journeys,
with 9 P0, 40 P1, and 12 P2 priorities in the initial snapshot. These priorities
are editorial triage, not confirmed bug counts. Seven reader journeys and
cross-page correction groups are recorded. Model-page pilot review is separate
from completion of each page's deeper follow-up work.

## Approved full rollout — 11 October 2026

User approved the model approach and requested full public-surface rollout.
Corrections: repair the contract diagram's ambiguous FieldDef/TypeDef edge;
remove version-number framing from public explanatory prose. Keep necessary
copyable dependency/artifact pins, and record exact verification versions in
internal evidence. This supersedes earlier public release-framing guidance.

Ownership: Sol foundations agent owns home, overview, concepts, reference;
Sol guides agent owns guides; Sol languages agent owns bindings. Lead owns
quickstarts/examples, diagram, global integration and verification. Each agent
writes its section outline/evidence record before editing. Preserve all slugs
and existing useful technical material. Whole-site cross-review follows edits.

The 61-page inventory defines the manual surface; generated catalogs remain
API-derived artifacts, not prose to hand-rewrite. Supporting diagrams, tutorial
downloads, prompts, sidebar, and maintenance records receive consistency review.
No deployment requested. Broader runnable walkthrough gaps stay explicit;
editorial completion does not imply clean-host qualification.


## Full rollout result

See ROLLOUT.md for completed work, evidence, review findings and remaining
qualification. The user accepted the model pages and authorized this rollout;
no further editorial checkpoint is pending. All original audit rows now link
to their section evidence ledger. The user’s version-framing and diagram
feedback is persisted in AGENTS.md for future Codex work.
