# Instructions for AI agents

This repo is **BrokenByDesign**: a "learning by fixing" project. Challenge apps contain **intentional bugs** for learners to find and fix.

## Do not fix intentional bugs

When editing code under `challenges/*/app/`:

- **Do not** fix, remove, or "correct" bugs that are part of the challenge (e.g. wrong data mapping, null reference, CSS typo).
- Only change challenge app code when the user explicitly asks to: add a new intentional bug, change the challenge, or fix a bug **as part of doing the challenge themselves** (e.g. "I'm solving challenge 01, help me fix the null error").
- When improving tooling, docs, or Docker in this repo, leave the broken behavior in challenge apps unchanged.

Intentional bugs for each challenge are documented in that challenge’s **SPEC.md** under "Intended bugs (for maintainers only)".

## Key paths

- **Design and workflow:** [docs/DESIGN.md](docs/DESIGN.md)
- **Repo layout:** [docs/REPO_STRUCTURE.md](docs/REPO_STRUCTURE.md)
- **Challenge specs:** [challenges/](challenges/) — each has a `SPEC.md` and an `app/` (the broken code).

## Learner workflow

Clone → run the challenge app → fix bugs on a branch → open PR with description (what was broken, cause, fix) → review → merge.
