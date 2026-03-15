# Challenge 01 — Broken frontend (L1)

**Level:** L1 — Broken frontend  
**Skills:** Reading code, devtools, basic debugging, Git (branch, commit, PR)  
**Practices:** Debugging, Git (branch/PR), clear communication (PR description). [Design goals](../../docs/DESIGN.md#1-audience-and-learning-goals).

---

## Ticket (as a junior would see it)

**Title:** Internal dashboard — something’s wrong

**Type:** Bug · **Priority:** Medium · **Component:** Frontend

**Description**

Support got reports that the internal dashboard isn’t right — wrong numbers and the orders table has an issue (blank row or error). Need it fixed so it matches the design and doesn’t crash. Design: the three stat cards at the top should look the same and show Revenue, Orders count, and Customers; the recent orders table should show all rows with no errors.

*Comment from PM: “Can you also make sure nothing else is broken?”*

**Steps to reproduce**

1. Open the dashboard (run locally, see README in the app folder).
2. Look at the stats and the table — note what’s wrong.

**Acceptance criteria**

- [ ] Dashboard matches design: three stat cards (Revenue, Orders, Customers) with consistent styling; Orders shows the **order count** (e.g. 89), not a revenue figure.
- [ ] Recent orders table renders all rows; no crash or "undefined" for missing customer data — use a sensible fallback (e.g. "—" or "Guest").
- [ ] No regressions: existing behaviour preserved.
- [ ] Open a PR on your fork with a short description of what was broken, root cause, and what you changed. CI must pass (`npm run test`).

---

## Your task

You’re the engineer assigned to this ticket. Get the app running, **find what’s wrong** (reproduce, then debug), fix it with minimal changes, and open a PR on your fork. The PR description should explain symptom, cause, and fix — like you would in a real code review.

**Setup:** Fork the repo (main is protected), clone your fork, then go to `challenges/01-broken-frontend/app/`, install deps, and run the app (see the app’s README). Work on a branch, e.g. `fix/01-broken-frontend`.

**Success =** acceptance criteria met, tests pass, PR description clear. No need to fix anything that isn't part of this ticket.

**What's next:** More challenges will follow in this repo (same flow: ticket → fix → PR). See the [README](../../README.md) or [design doc](../../docs/DESIGN.md) when they're added.

---

## Intended bugs (maintainers / AI agents only)

Intentional bugs for this challenge are listed in **[INTENTIONAL_BUGS.md](INTENTIONAL_BUGS.md)**. Do not expose that file to learners.

---

## Repo structure for this challenge

When implementing the actual broken app, use:

```
challenges/01-broken-frontend/
  SPEC.md             # This file (public)
  INTENTIONAL_BUGS.md # Intentional bugs list (maintainers/agents only — do not expose to learners)
  app/                # The broken frontend app (learners clone/fork this or work in repo)
    README.md   # How to install and run
    package.json
    src/
    ...
```

Or a dedicated repo that links back to this spec.
