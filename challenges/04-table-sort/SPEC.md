# Challenge 04 — Table sort behaves strangely (L2)

**Level:** L2 — It works but…  
**Skills:** Array sorting, immutability, event handling, UX expectations, light refactoring  
**Practices:** Reasoning about “correct” sort behavior, debugging logic bugs, writing a clear PR. See [design goals](../../docs/DESIGN.md#1-audience-and-learning-goals).

---

## Ticket (as a junior would see it)

**Title:** Dashboard — recent orders table sort is weird

**Type:** Bug · **Priority:** Medium · **Component:** Frontend — Table

**Description**

Users complain that the **Recent orders** table sort “doesn’t make sense”:

- Sorting by **Amount** or **Date** sometimes puts values in the wrong order, and  
- Clicking the column header multiple times doesn’t consistently toggle between ascending/descending.

Support says “I click to sort by highest amount and the order of rows still looks random.” We want sorting that feels natural and predictable.

*Comment from PM: “At minimum, sort arrows/ordering should match what people expect in a normal table (smallest→largest, oldest→newest, etc.).”*

**Steps to reproduce**

1. Open the dashboard (see README in this challenge’s app).
2. In the Recent orders table, click on the **Amount** and **Date** column headers.
3. Observe:
   - Sorting by Amount doesn’t always go from smallest→largest or largest→smallest, or  
   - Clicking repeatedly doesn’t reliably toggle or resets to a strange default.

**Acceptance criteria**

- [ ] Clicking a sortable column header sorts rows by that column in a clear order (e.g. Amount ascending on first click, descending on second; same for Date).
- [ ] Sorting uses the correct type:
  - Amount sorted numerically, not alphabetically.
  - Date sorted by actual date, not string lexicographically (unless the format is ISO and clearly documented).
- [ ] Sorting does not mutate the original data in a way that breaks other parts of the UI.
- [ ] Visual state (e.g. sort icon or indication) matches the actual sort order if present.
- [ ] No regressions: when not sorting, the table shows its default order; other dashboard parts unaffected.
- [ ] PR explains:
  - What behavior users saw,
  - What the code was doing wrong,
  - How you fixed it (including any refactor for readability).
- [ ] CI (tests for this challenge’s app) passes.

---

## Your task

You’re the engineer assigned to this ticket. Get the app running, reproduce the odd sort behavior, then fix it so it behaves like a normal sortable table.

**Setup:**

1. Fork the repo (if you haven’t already; main is protected).
2. Clone your fork.
3. Go to `challenges/04-table-sort/app/` and follow the README to install deps and run the app.
4. Create a branch, e.g. `fix/04-table-sort`.

**What to focus on:**

- How the sort state is stored (by column, direction).
- How the sorting is implemented (where `sort` is called, and on which array).
- Whether data is mutated in place or derived immutably.

**Success =** acceptance criteria met, tests pass, PR description is clear and concise.

---

## Intended bugs (maintainers / AI agents only)

Intentional bugs for this challenge are listed in **[INTENTIONAL_BUGS.md](INTENTIONAL_BUGS.md)**. Do not expose that file to learners.

---

## Repo structure for this challenge

When implementing the app for this challenge, use:

```
challenges/04-table-sort/
  SPEC.md             # This file (public)
  INTENTIONAL_BUGS.md # Intentional bugs list (maintainers/agents only — do not expose to learners)
  app/                # The broken frontend app for this challenge
    README.md         # How to install and run
    package.json
    src/
    ...
```

Or a dedicated repo that links back to this spec.

