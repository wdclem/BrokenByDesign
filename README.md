# BrokenByDesign

Learn by fixing: fork the repo (main is protected), get your ticket and instructions from the challenge spec, fix the bugs, open a PR on your fork. Tests run on the PR.

## Where are my instructions?

**Your ticket and full instructions are in the challenge spec**, not only in this README.

- **Challenge 01 (L1):** **[challenges/01-broken-frontend/SPEC.md](challenges/01-broken-frontend/SPEC.md)** — dashboard stats + table bugs. App: `challenges/01-broken-frontend/app/`.
- **Challenge 02 (L1):** **[challenges/02-date-filter/SPEC.md](challenges/02-date-filter/SPEC.md)** — date filter returns wrong results. App: `challenges/02-date-filter/app/`.
- **Challenge 03 (L1):** **[challenges/03-loading-error/SPEC.md](challenges/03-loading-error/SPEC.md)** — loading/error/retry state bugs. App: `challenges/03-loading-error/app/`.
- **Challenge 04 (L2):** **[challenges/04-table-sort/SPEC.md](challenges/04-table-sort/SPEC.md)** — table sort logic/state bugs. App: `challenges/04-table-sort/app/`.
- **Challenge 05 (L2):** **[challenges/05-accessibility/SPEC.md](challenges/05-accessibility/SPEC.md)** — accessibility issues (semantics, labels, keyboard). App: `challenges/05-accessibility/app/`.
- **Challenge 06 (L3):** **[challenges/06-top-customers/SPEC.md](challenges/06-top-customers/SPEC.md)** — top-customers feature with intentional logic bugs. App: `challenges/06-top-customers/app/`.

So: fork → clone your fork → pick a challenge and read its SPEC → run that challenge’s app → fix → PR on your fork.

---

## Quick flow

1. **Fork** this repo (upstream `main` is protected), then **clone your fork**.
2. **Read your instructions:** Pick a challenge (e.g. [01](challenges/01-broken-frontend/SPEC.md), [03](challenges/03-loading-error/SPEC.md), or [06](challenges/06-top-customers/SPEC.md)) and open its SPEC (ticket + task).
3. **Run the app:** e.g. `cd challenges/04-table-sort/app`, then `npm install` and `npm run dev` (see that app’s README).
4. **Fix** the bugs, work on a branch (e.g. `fix/01-broken-frontend`), **open a PR on your fork** with what was broken, root cause, and what you changed. Tests run on the PR; when they pass, merge.

**What's next:** Same flow for every challenge: ticket → fix → PR. See [design doc](docs/DESIGN.md).

---

- **AI agents:** See [AGENTS.md](AGENTS.md) — do not "fix" intentional bugs in challenge apps unless the user is solving the challenge.
- **Design:** [docs/DESIGN.md](docs/DESIGN.md) · **Repo layout:** [docs/REPO_STRUCTURE.md](docs/REPO_STRUCTURE.md).
