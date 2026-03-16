# BrokenByDesign

Learn by fixing: fork the repo (main is protected), get your ticket and instructions from the challenge spec, fix the bugs, open a PR on your fork. Tests run on the PR.

## Where are my instructions?

**Your ticket and full instructions are in the challenge spec**, not only in this README.

- **Challenge 01 (L1):** **[challenges/01-broken-frontend/SPEC.md](challenges/01-broken-frontend/SPEC.md)** — dashboard stats + table bugs. App: `challenges/01-broken-frontend/app/`.
- **Challenge 02 (L1):** **[challenges/02-date-filter/SPEC.md](challenges/02-date-filter/SPEC.md)** — date filter returns wrong results. App: `challenges/02-date-filter/app/`.

So: fork → clone your fork → pick a challenge and read its SPEC → run that challenge’s app → fix → PR on your fork.

---

## Quick flow

1. **Fork** this repo (upstream `main` is protected), then **clone your fork**.
2. **Read your instructions:** Pick a challenge (e.g. [01](challenges/01-broken-frontend/SPEC.md) or [02](challenges/02-date-filter/SPEC.md)) and open its SPEC (ticket + task).
3. **Run the app:** e.g. `cd challenges/02-date-filter/app`, then `npm install` and `npm run dev` (see that app’s README).
4. **Fix** the bugs, work on a branch (e.g. `fix/01-broken-frontend`), **open a PR on your fork** with what was broken, root cause, and what you changed. Tests run on the PR; when they pass, merge.

**What's next:** More challenges will follow (same flow: ticket → fix → PR). See [design doc](docs/DESIGN.md) when they're added.

---

- **AI agents:** See [AGENTS.md](AGENTS.md) — do not "fix" intentional bugs in challenge apps unless the user is solving the challenge.
- **Design:** [docs/DESIGN.md](docs/DESIGN.md) · **Repo layout:** [docs/REPO_STRUCTURE.md](docs/REPO_STRUCTURE.md).
