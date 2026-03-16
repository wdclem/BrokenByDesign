# Challenge 02 — Date filter is wrong (L1)

**Level:** L1 — Broken frontend  
**Skills:** State management, basic comparison logic, reading/filtering arrays, debugging with devtools/logs  
**Practices:** Reproducing bugs, reasoning about expected vs actual behavior, small focused fix, PR communication. See [design goals](../../docs/DESIGN.md#1-audience-and-learning-goals).

---

## Ticket (as a junior would see it)

**Title:** Dashboard — date filter returns wrong results

**Type:** Bug · **Priority:** Medium · **Component:** Frontend

**Description**

Support reports that the **date range filter** on the Sales dashboard’s “Recent orders” table is confusing users. When they select a date range, the table either:

- shows orders **outside** the selected range, or  
- **hides** orders that should be included.

We need the table to show only orders whose date falls **inside** the selected range, and to behave in an intuitive way (inclusive of start and end dates).

*Comment from PM: “Some customers say ‘I chose this week and I see orders from last week’ — please make it match their expectations.”*

**Steps to reproduce** (example; actual UI may differ slightly)

1. Open the dashboard (run locally, see README in the app folder for this challenge).
2. In the “Recent orders” section, set the date filter to a specific range (e.g. from 2024‑01‑13 to 2024‑01‑15).
3. Observe that:
   - Some rows with dates **outside** that range still show up, or
   - Some rows that should be shown are missing.

**Acceptance criteria**

- [ ] With a given date range selected, the table shows **only** orders whose date is within the range (inclusive of start and end dates, unless clearly documented otherwise).
- [ ] No orders outside the chosen range appear.
- [ ] Clearing the filter shows all recent orders again.
- [ ] No regressions: other parts of the dashboard still behave as before.
- [ ] Open a PR on your fork with a short description of:
  - What was broken (symptom),
  - Root cause (what in the code caused it),
  - What you changed and why.
- [ ] CI (tests for this challenge’s app) passes.

---

## Your task

You’re the engineer assigned to this ticket. Get the app running, **reproduce** the bug, understand what the existing code is trying to do, then fix it with minimal, clear changes.

**Setup:**

1. Fork the repo (if you haven’t already; main is protected).
2. Clone your fork.
3. Go to `challenges/02-date-filter/app/` and follow the README there to install deps and run the app.
4. Create a branch, e.g. `fix/02-date-filter`.

**What to focus on:**

- How state is stored for the date filter.
- How the filter is applied to the orders list (the logic that compares order dates to the selected range).
- Edge cases: start/end dates, no filter, “no results” state.

**Success =** acceptance criteria met, tests pass, PR description is clear and concise.

---

## Intended bugs (maintainers / AI agents only)

Intentional bugs for this challenge are listed in **[INTENTIONAL_BUGS.md](INTENTIONAL_BUGS.md)**. Do not expose that file to learners.

---

## Repo structure for this challenge

When implementing the app for this challenge, use:

```
challenges/02-date-filter/
  SPEC.md             # This file (public)
  INTENTIONAL_BUGS.md # Intentional bugs list (maintainers/agents only — do not expose to learners)
  app/                # The broken frontend app for this challenge
    README.md         # How to install and run
    package.json
    src/
    ...
```

Or a dedicated repo that links back to this spec.

