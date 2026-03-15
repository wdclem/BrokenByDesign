# Instructions for AI agents

This repo is **BrokenByDesign**: a "learning by fixing" project. Challenge apps contain **intentional bugs** for learners to find and fix.

## Do not fix intentional bugs

When editing code under `challenges/*/app/`:

- **Always check** that the change is not fixing an intentional bug: read that challenge's **INTENTIONAL_BUGS.md** (e.g. `challenges/01-broken-frontend/INTENTIONAL_BUGS.md`) before applying any fix. If the issue is listed there, do not fix it unless the user is explicitly solving the challenge.
- **Do not** fix, remove, or "correct" bugs that are part of the challenge (e.g. wrong data mapping, null reference, CSS typo).
- Only change challenge app code when the user explicitly asks to: add a new intentional bug, change the challenge, or fix a bug **as part of doing the challenge themselves** (e.g. "I'm solving challenge 01, help me fix the null error").
- When improving tooling, docs, or Docker in this repo, leave the broken behavior in challenge apps unchanged.

Intentional bugs for each challenge are listed in a **separate file** per challenge: `challenges/<id>-<name>/INTENTIONAL_BUGS.md`. Do not expose these files to learners.

## Key paths

- **Design and workflow:** [docs/DESIGN.md](docs/DESIGN.md)
- **Repo layout:** [docs/REPO_STRUCTURE.md](docs/REPO_STRUCTURE.md)
- **Challenge specs:** [challenges/](challenges/) — each has a `SPEC.md`, an `INTENTIONAL_BUGS.md` (maintainers/agents only), and an `app/` (the broken code).

## Learner workflow

Fork (main is protected) → clone your fork → run the challenge app → fix bugs on a branch → open PR on your fork with description (what was broken, cause, fix) → automated tests run → merge.
