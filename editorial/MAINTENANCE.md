# Documentation maintenance

Status: proposed impact and release-review process. The docs validation workflow
runs the rendered documentation checker. The website repository publishes the
combined Cloudflare site and checks for changed docs revisions on its schedule.
No SDK impact checker or cross-repository SDK release gate is installed.
Inspected on 11 October 2026.

Readers: SDK contributors need to identify documentation affected by a change;
the docs editor needs a review queue; release maintainers need an explicit
decision about the documentation shipped for a version.

src: docs `.github/workflows/deploy.yml`, `package.json`,
`scripts/check-docs.py`, `scripts/generate-api-docs.py`,
`public/api/version.json`; SDK `.forgejo/workflows/linux.yml`,
`.forgejo/workflows/release.yml`, `scripts/release/version.sh`.
visual: none; the tables and manifest example define the workflow.

## Existing mechanisms

The docs repository builds Astro and runs `npm run check:docs` on pushes to
`main`, pull requests, and manual dispatch. It does not deploy GitHub Pages.
The website repository's `Publish SDK site to Cloudflare` workflow builds both
repositories and publishes to https://sdk.getaster.now. Its scheduled revision
checks pick up docs changes; manually dispatch it for immediate publication.
The live `/deployment.json` receipt identifies both source commits. See the
[publication runbook](https://github.com/aster-rpc/website/blob/main/DEPLOYMENT.md).
This publication schedule does not assess SDK changes or qualify examples.

`npm run check:docs` checks built routes, anchors, assets, descriptions, heading
counts, and selected private-repository links. `npm run check:links` adds
external URL requests. These assess structure and reachability, not accuracy.

The API generator requires matching installed Python and TypeScript package
versions and writes `public/api/version.json`. The current record names
0.3.893. That records package versions, not a complete chain of artifact
digests, SDK revision, or guide qualification. Generation also maintains
curated introductions and selected compatibility redirects.

In the SDK, `linux.yml` builds and tests commit candidates. `release.yml`
promotes the completed candidate for a tag's exact commit and publishes its
provenance before release artifacts. The inspected promotion workflow has no
documentation disposition gate or dependency on a docs commit. Its guarantees
about candidate artifacts do not establish documentation accuracy. The SDK's
AGENTS.md workflow inventory predates this candidate/promotion layout; use the
workflow files when implementing integration.

## Released documentation and development review

The public manual continues to target its explicitly recorded package baseline,
currently 0.3.893, until a reviewed baseline update is ready. A new SDK `main`
commit creates review work; it must not silently change released installation
commands, signatures, parity claims, or generated API references.

Maintain two separate records:

- A development queue identifies SDK base/head revisions, changed paths,
  affected pages, reviewer, and disposition. Work can be prepared on docs
  branches before packages ship.
- A release record identifies the public version, exact SDK revision, artifact
  provenance, docs commit, reviewed pages, example evidence, and known gaps.
  Use immutable commit identifiers in records, even if a branch name is also
  supplied for convenience.

A release-specific record can live at `editorial/releases/<version>.json`.
Public pages should state any relevant installed-package boundary; private
source paths and review records belong in editorial metadata. If a development
preview site is later added, give it an explicit unreleased banner and separate
deployment destination. No such separate deployment is established here.

## Source-to-page manifest

Propose `editorial/source-map.json`, validated against a versioned JSON schema.
Use repository-relative source paths; resolve checkout locations through CLI
arguments rather than committing workstation paths. Map tests, package exports,
examples, native interfaces, and release tooling alongside implementation.
Use stable page slugs because source filenames may change.

An illustrative entry follows. The paths and revisions must be checked when
the manifest is populated; this example is not an installed configuration.

```json
{
  "schema_version": 1,
  "repositories": {
    "sdk": {"baseline_revision": "<full SDK commit SHA>"}
  },
  "public_baseline": {"version": "0.3.893", "release_record": "editorial/releases/0.3.893.json"},
  "pages": [{
    "slug": "docs/concepts/contract-identity",
    "path": "src/content/docs/docs/concepts/contract-identity.mdx",
    "status": "lab",
    "owner": "<responsible maintainer>",
    "sources": [{"repository": "sdk", "include": ["core/src/contract.rs", "core/src/canonical.rs", "aster/src/**", "aster-macros/**"], "exclude": []}],
    "claims": ["contract compatibility", "canonical identity"],
    "verified_against": {"version": "0.3.893", "sdk_revision": "<full SDK commit SHA>"},
    "review": {"date": "<YYYY-MM-DD>", "evidence": "<editorial evidence path>", "method": "source-inspection"},
    "walkthrough": {"state": "pending", "evidence": null}
  }]
}
```

Require unique slugs, existing manual page paths, at least one source rule and
an accountable owner for each substantive page. Allow explicit shared rules
for global changes: package exports, ABI declarations, default configuration,
dependency versions, install scripts, and release delivery can affect many
pages. Track external primary sources separately with their URL and check date.
Treat an unmatched SDK change as requiring triage rather than as no docs impact.
Start with broad mappings; refine noisy rules after reviewing actual changes.

## Change-triggered review

1. For every SDK change, compare its merge base to its proposed head. For
   accumulated release review, compare the last reviewed SDK revision to the
   exact candidate revision. Record the comparison endpoints.
2. Match added, modified, removed, and renamed paths against source rules.
   Include both old and new names for renames. Produce affected pages and
   unmatched paths in a machine-readable report and a short review summary.
3. The author supplies a disposition for every affected page: update prepared,
   reviewed with no text change, or deferred with reason, owner, and deadline.
   A prose edit alone does not clear a candidate; require an evidence record.
4. The docs reviewer checks behavior against the appropriate released package
   or exact candidate source, checks duplicated claims across pages, and
   records what was inspected or executed. New or changed copyable examples
   need execution against the intended packages and native libraries.
5. Merge development review work when ready, keeping unreleased material off
   the public build. Advance the public baseline only through release review.

The first integration should generate a non-blocking PR report in SDK Forgejo
CI, using a pinned docs-manifest revision. It needs an authenticated read of
the private SDK checkout but no permission to publish or edit either repo.
The docs repository cannot infer private SDK changes from its own push event.
Cross-repository events, credentials, and trusted-branch handling need explicit
implementation; do not expose private diffs in public PR logs. Agent-generated
drafts require the same factual review as human drafts.

## Release gates

Begin with a maintainer checklist recorded against the exact candidate. After
the process is exercised, add a machine-checked disposition requirement before
the first registry write in SDK `release.yml`. This would be an additional
gate; the existing candidate promotion checks remain necessary. A docs record
must be bound to the candidate SDK SHA and an immutable reviewed docs commit.

The table spans two phases. Before registry publication, require the exact-SHA
disposition, candidate-source review, and available candidate test evidence.
Consumer tests requiring public packages occur after package publication.
Advancing the public docs baseline requires those consumer results; fetching
and inspecting deployed docs occurs after that docs deployment. Never require
new deployed documentation or public installation of unpublished packages at
the pre-publication gate. Record each phase as pending or complete separately.

| Check | Required evidence |
| --- | --- |
| Scope accounted for | All impacted pages and unmatched paths triaged; deferrals explicitly accepted by release maintainer |
| Package baseline | Version and SDK SHA match candidate provenance; package/native delivery boundaries reviewed per language |
| API reference | Generated from matching packages; generator versions and input artifact digests recorded; API version record agrees |
| Examples | Changed quickstarts executed with pinned packages; host, runtime, commands, result, and date recorded |
| Editorial review | Claims, limits, prerequisites, duplicated answers, and stable inbound links reviewed |
| Site checks | Clean dependency install, build, internal checker, external-link review, and relevant rendered light/dark/mobile inspection |
| Publication | Docs deployment commit recorded; deployed changed routes fetched and inspected after publication |

External access blocks need a reviewed disposition, since an HTTP failure can
reflect bot blocking. A failed internal route or copyable example needs a fix
or the affected guide must remain a visible draft. A guide reaches `live` only
after its instructions have been followed word for word on a clean host of the
documented kind. Source inspection alone can support an API claim but cannot
qualify a tutorial.

Artifact availability and docs publication are separate operations. If packages
must publish before their consumer installation can be tested, record that
remaining gate and withhold the new public docs baseline until the consumer
test passes. Do not describe the release as documentation-qualified before
that evidence exists. Preserve the previous docs baseline during the interval.

## Freshness reporting and responsibility

Propose a report with one row per page: public baseline, last verified SDK
revision, last evidence date/method, pending source changes, oldest unresolved
candidate, owner, walkthrough status, and accepted deferral. Report missing
source mappings and unreviewed changes separately. A recent editorial edit is
not a recent verification, and an old verification date does not by itself
prove that an unchanged page is wrong.

| Responsibility | Trigger and cadence |
| --- | --- |
| SDK change author | Supply docs impact/disposition with each behavior, API, default, packaging, or lifecycle change |
| Docs editor | Review the impact queue each working day during rapid development; perform the final voice and cross-page consistency pass |
| Binding maintainer | Validate changed signatures, ownership, examples, and package/native combinations for their language |
| Release maintainer | Accept release deferrals and bind documentation disposition to every promoted candidate |
| Independent reviewer | Review substantive batches and release baseline changes; record fix, defer, or disagree with reasons |
| Docs maintainer | Weekly mapping/unmatched-path sweep and external-link review; monthly reader-journey and clean-host sampling |

These are roles to assign, not staffing that already exists. Set response
targets after measuring queue volume. Every release gets a disposition even
when no public prose changes are required. Scheduled sweeps supplement the
change queue and catch external drift; they cannot replace release review.

## Implementation order and limits

| Priority | Concrete next action |
| --- | --- |
| P0 | Populate `editorial/source-map.json`, its schema, and named owners; record baseline evidence gaps; exercise the release checklist manually |
| P1 | Implement `scripts/docs-impact.py` as a read-only reporter with explicit SDK/docs checkout and base/head inputs; test additions, deletions, renames, unmatched paths, and schema failures |
| P1 | Land and verify the local deployment checker change; add non-blocking Forgejo PR reporting with a pinned manifest revision |
| P2 | Add the per-page freshness report and agreed response targets; measure noisy mappings and omissions |
| P2 | Integrate exact-candidate release records and blocking disposition checks after trust boundaries and emergency deferrals are understood |
| P2 | Automate post-deploy fetches and retain release-linked consumer walkthrough evidence |

The proposed reporter interface is below. This command will become runnable
only after P1 is implemented. `BASE_SDK_SHA` and `HEAD_SDK_SHA` must identify
the intended reviewed baseline and candidate; no implicit `latest` lookup.

```sh
rtk python3 scripts/docs-impact.py \
  --sdk-repo ../aster-rpc-internal \
  --manifest editorial/source-map.json \
  --base "$BASE_SDK_SHA" --head "$HEAD_SDK_SHA" \
  --json-out /tmp/aster-docs-impact.json
```

Require a nonzero exit for invalid inputs or an invalid manifest; affected or
unmatched files should produce a report without pretending they are proven
documentation defects. A separate disposition validator should enforce the
chosen PR/release policy once blocking checks are introduced.

Path matching can miss indirect behavior changes, dynamic bindings, external
dependency drift, and incomplete mappings. Semantic diffs and export/config
snapshots can improve targeting but still need interpretation. Successful
builds, generated reference, timestamps, and automated link checks cannot
guarantee that an explanation is correct or understandable. The process makes
review obligations and evidence visible; reviewers establish the claims.


## Editorial rollout integration

The approved full-manual pass is recorded in ROLLOUT.md. AGENTS.md now makes the
reader-first style, source verification, cross-page consistency review and
user's no-release-number-prose preference part of future Codex work. Preserve
exact package/source evidence internally and installation pins where needed.
This is an installed repository workflow instruction; automated source impact
reporting and cross-repository gates above remain proposed.
