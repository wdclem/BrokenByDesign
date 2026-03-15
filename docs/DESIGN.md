# BrokenByDesign — Design Doc

Learning by **fixing** existing broken or imperfect code instead of building from scratch. Learners fork the repo (main protected), fix issues on a branch, open a PR on their fork, automated tests run, merge on the fork, then tackle further challenges.

---

## 1. Audience and learning goals

**Primary:** Self (validation). **Extended:** Graduates and self-learners breaking into junior roles; juniors switching job or language.

**Goals (tied to junior-engineer philosophy):**

- **Technical:** Data structures/algorithms in context, clean readable code, debugging, Git (branch, PR, review), one language + ecosystem; problem decomposition and explaining thought process.
- **Meta:** Independent learning, continuous improvement; "understand and explain" not just "solve."
- **Future:** AI literacy + critical thinking; adaptability across domains/tools; resilience to change.
- **Soft:** Clear communication (decisions, docs); ownership and accountability; critical thinking in an AI world (question and refine, not just generate).

---

## 2. Level definitions

| Level | Focus | Skills emphasized |
|-------|--------|-------------------|
| **L1 — Broken frontend** | Layout/CSS, JS errors, one component broken, wrong data. | Reading code, devtools, basic debugging, Git. |
| **L2 — It works but…** | Accessibility, performance, code quality, small refactors. | Trade-offs, readability, testing. |
| **L3 — Feature with bugs** | Add or extend a feature; spec or starter code has intentional bugs. | Spec interpretation, testing, PR description. |
| **L4 — Realistic codebase** | Larger app, multiple bugs, missing tests, unclear contracts. | System understanding, prioritization, ownership. |

Bugs should feel **genuine** (realistic causes and symptoms) rather than obviously artificial.

---

## 3. Challenge types

- **Bugs:** Fix broken behavior, layout, or logic (start here).
- **Refactors:** Improve structure/readability without changing behavior.
- **Tests:** Add or fix tests; improve coverage or clarity.
- **Docs:** Clarify README, comments, or API docs.
- **New features with bugs:** Implement a feature from a spec where the spec or starter code contains intentional bugs to find and fix.

Capture ideas in a backlog; implement in order of level and type (bugs first, then refactors/tests/docs/features).

**Task format:** Write challenge tasks so they resemble real Jira-style tickets (vague description, acceptance criteria, optional wrong hypothesis). This replicates what a junior actually encounters. See [docs/JIRA_STYLE_TASKS.md](JIRA_STYLE_TASKS.md) for template, examples, and tips. Tasks can range from precise ("fix this one field") to very vague ("the page is broken" or no ticket at all). Using the **same app** across several challenges (one codebase, multiple tickets/bugs) also mirrors real junior work.

---

## 4. Git workflow and repo structure

**Flow:**

1. Learner **forks** the repo (upstream `main` is protected).
2. Learner clones **their fork**, then works on a branch: `git checkout -b fix/<short-description>`, fix, commit, push.
3. Learner opens a **PR on their fork** (not against upstream). Each challenge is described in an **issue** or linked doc: what's wrong or what to do.
4. **Automated tests** run on the fork's PR (e.g. CI on push to the fork).
5. If criteria pass: merge on the fork (or optional sync back to upstream later).
6. Next challenge: new issue → new branch → PR on fork → tests → merge.

**Repo structure (per challenge repo):**

```
<challenge-repo>/
  README.md          # How to run, how to participate, link to challenges
  CHALLENGES.md      # Or ./challenges/ — list of issues/challenge specs
  src/               # App code (broken by design)
  ...
```

**This repo (BrokenByDesign):** Holds design doc, challenge specs, and any shared tooling; challenge repos can live here as subdirs or in separate repos.

**Deployment:** Each challenge app can be dockerized (build stage + nginx or similar to serve the built frontend). One image per challenge; deploy to any container host (e.g. Cloud Run, ECS, Fly.io). See `challenges/01-broken-frontend/app/Dockerfile` for the pattern.

---

## 5. AI review role and criteria

**Role (choose one or hybrid):**

- **Comment only:** AI reviews PR and comments; human merges.
- **Approve and merge:** AI approves and merges when criteria pass (e.g. via GitHub Actions + API).

**Criteria to check (examples):**

- Fix addresses the challenge (bug fixed, behavior matches spec).
- No new obvious regressions (e.g. existing behavior preserved where required).
- Code is readable (naming, simple structure).
- PR description explains what was wrong and how it was fixed (communication).
- Optional: tests added/updated for the fix.

Design doc is the single reference for adding challenges, levels, and review rules.
