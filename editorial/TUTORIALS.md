# Tutorial and example rollout

Readers: developers trying a first call, choosing their next capability, and
connecting different language implementations. User-approved model style:
define the job, show the scenario and result, introduce prerequisites, then
explain code and failures. No release-number framing in explanatory prose.

Sources: existing executed projects recorded in DOCS_PLAN.md and /tmp/aster-docs-parity,
released SDK examples/API source, and source-qualified reference pages. Keep
package pins. Conceptual fragments are not newly qualified runnable programs.

## Outline

- `src/content/docs/docs/quickstart/dotnet.mdx` [lab]: review purpose, prerequisites, file/ownership map, expected result, failures and next step.
  src: existing walkthrough and matching released binding source/tests.
  visual: project tree or decision/checkpoint table where useful; retain existing MissionControl diagram with corrected session scope.
- `src/content/docs/docs/quickstart/first-service.mdx` [lab]: review purpose, prerequisites, file/ownership map, expected result, failures and next step.
  src: existing walkthrough and matching released binding source/tests.
  visual: project tree or decision/checkpoint table where useful; retain existing MissionControl diagram with corrected session scope.
- `src/content/docs/docs/quickstart/go.mdx` [lab]: review purpose, prerequisites, file/ownership map, expected result, failures and next step.
  src: existing walkthrough and matching released binding source/tests.
  visual: project tree or decision/checkpoint table where useful; retain existing MissionControl diagram with corrected session scope.
- `src/content/docs/docs/quickstart/java.mdx` [lab]: review purpose, prerequisites, file/ownership map, expected result, failures and next step.
  src: existing walkthrough and matching released binding source/tests.
  visual: project tree or decision/checkpoint table where useful; retain existing MissionControl diagram with corrected session scope.
- `src/content/docs/docs/quickstart/mission-control.mdx` [lab]: review purpose, prerequisites, file/ownership map, expected result, failures and next step.
  src: existing walkthrough and matching released binding source/tests.
  visual: project tree or decision/checkpoint table where useful; retain existing MissionControl diagram with corrected session scope.
- `src/content/docs/docs/quickstart/python.mdx` [lab]: review purpose, prerequisites, file/ownership map, expected result, failures and next step.
  src: existing walkthrough and matching released binding source/tests.
  visual: project tree or decision/checkpoint table where useful; retain existing MissionControl diagram with corrected session scope.
- `src/content/docs/docs/quickstart/rust.mdx` [lab]: review purpose, prerequisites, file/ownership map, expected result, failures and next step.
  src: existing walkthrough and matching released binding source/tests.
  visual: project tree or decision/checkpoint table where useful; retain existing MissionControl diagram with corrected session scope.
- `src/content/docs/docs/examples/cross-language.mdx` [lab]: review purpose, prerequisites, file/ownership map, expected result, failures and next step.
  src: existing walkthrough and matching released binding source/tests.
  visual: project tree or decision/checkpoint table where useful; retain existing MissionControl diagram with corrected session scope.
- `src/content/docs/docs/examples/data-heavy-row-mode.mdx` [lab]: review purpose, prerequisites, file/ownership map, expected result, failures and next step.
  src: existing walkthrough and matching released binding source/tests.
  visual: project tree or decision/checkpoint table where useful; retain existing MissionControl diagram with corrected session scope.
- `src/content/docs/docs/examples/hello-service.mdx` [lab]: review purpose, prerequisites, file/ownership map, expected result, failures and next step.
  src: existing walkthrough and matching released binding source/tests.
  visual: project tree or decision/checkpoint table where useful; retain existing MissionControl diagram with corrected session scope.

## Execution scope

Preserve previously executed quickstart code and archives except verified fixes.
Replace misleading hello-service copy with the same tested service pattern;
validate if executable code changes. MissionControl remains explicitly a draft
until full chapter execution, enrollment and CLI qualification is complete.
Source/main links are not proof of public package compatibility.

## Completed dispositions

All ten pages reviewed and revised. Quickstarts retain tested package pins and
working source while adding project/ownership maps, use cases, checkpoints,
cleanup and troubleshooting. Next steps now routes each language/task without
assuming Python decorators. Hello uses stable wire names and explicit open
admission; cross-language now has an executed Python-to-JavaScript call rather
than a one-language schema sketch. ROW explains the root-type restriction in
application terms.

MissionControl preserves the detailed chapters with explicit draft limits,
corrects sessions, relay policy, metadata generation, setup and lifecycle, and
simulates commands. Added an executed four-pattern/two-session Python download.
Independent reviewer checked archive parity, credentials absence and Python
minimum requirement. All findings fixed; broad CLI/enrollment qualification
remains deferred. See ROLLOUT.md for exact execution and validation evidence.
