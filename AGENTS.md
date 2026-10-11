# Working on Aster public documentation

Read `/Users/emrul/.codex/RTK.md` and `/Users/emrul/.codex/HISTER.md` when working
on this workstation. Active site sources are `src/content/docs`; legacy
`docs/` and Docusaurus artifacts are not the public manual's source of truth.

## Reader and voice rules

Follow `editorial/PLAN.md` and the user's documentation-writing guidance.
Explain the subject and a recognizable use case before its machinery. Define
terms before relying on them, state prerequisites, show the expected result,
put limitations beside claims, and give a next step. API references may link
to conceptual explanations instead of repeating tutorials.

The user approved the contract identity, fenced leases and Rust server model
pages. The user explicitly rejected release-number framing in public prose
such as "In 0.3.893" or "This reference targets ...". State supported behavior
directly. Keep exact dependency versions in executable setup commands,
artifact URLs and lockfiles where reproducibility needs them. Record the exact
source/package revisions used for verification in internal editorial evidence.
Do not erase limitations just because a version qualifier is removed.

## Change and maintenance process

Read `editorial/MAINTENANCE.md` before advancing a package baseline. A change on
SDK main is a candidate for review, not proof that the installed package
supports it. Verify behavior against the intended code/artifacts. For changes
to admission, session lifetime, config precedence, packaging or wire types,
check all pages making that claim, not just the API reference.

Keep `editorial/PAGE_AUDIT.md` and the section evidence ledgers current. Record
new pages, changed source evidence, tests actually executed, and unresolved
qualification separately. Never close a walkthrough gap based on a passing
build or source inspection. Keep draft examples visibly scoped. Generated API
catalogs must be generated from matching packages, not hand-edited for prose.

Before completing a batch:

- Reread whole pages for a consistent voice and check the relevant reader journeys.
- Get an independent technical/editorial review and record fixes and deferrals.
- Build and run `npm run check:docs`; review external links for changed URLs.
- Execute changed copyable examples against the documented inputs where feasible;
  otherwise retain an explicit qualification limit.
- Inspect changed diagrams in both themes and mobile/desktop layouts. Edges must
  visibly connect the intended nodes; lack of page overflow is not visual approval.
- Keep downloadable source examples synchronized with visible code.

No impact-reporting scheduler or cross-repository release gate is installed by
these instructions. MAINTENANCE.md distinguishes proposed automation from the
local deployment checker. Do not describe a schedule as active without creating
and verifying it. Preserve unrelated working-tree changes. Do not publish
unless authorized by the user.
