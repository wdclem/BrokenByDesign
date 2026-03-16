# Challenge 06 — “Top customers” widget with bugs (L3)

**Level:** L3 — Feature with bugs  
**Skills:** Implementing a feature from a spec, data transformation, state updates, reading/writing tests  
**Practices:** Interpreting partial specs, debugging a new feature, writing a solid PR. See [design goals](../../docs/DESIGN.md#1-audience-and-learning-goals).

---

## Ticket (as a junior would see it)

**Title:** Dashboard — add “Top customers” widget (numbers look off)

**Type:** Story / Bug · **Priority:** Medium · **Component:** Frontend — Dashboard

**Description**

Product wants a new **“Top customers”** widget on the Sales dashboard. The initial implementation is already merged into this challenge’s branch, but:

- The numbers in the Top customers list don’t match what people expect based on Recent orders, and  
- The widget doesn’t always update when the underlying data changes.

We need the widget to show the correct top customers (by total amount over a given period) and stay in sync with the data.

*Comment from PM: “I should be able to glance at the dashboard and trust that the Top customers widget matches the table.”*

**Rough spec**

- Show a **Top customers** panel on the dashboard (e.g. right side or below stats).
- For the current dataset:
  - Aggregate orders per customer (by name).  
  - Sort customers by **total amount spent**, descending.  
  - Show the top N (e.g. top 3).
- Each row should show at least: customer name and total amount.

**Steps to reproduce**

1. Open the dashboard (this challenge’s app).
2. Compare the Top customers widget with the Recent orders table data.
3. Optionally, trigger whatever mechanism the app uses to change data (e.g. refresh, filter) and observe if the widget updates correctly.

**Acceptance criteria**

- [ ] Top customers widget shows customers in descending order of total amount spent (per spec).
- [ ] Aggregation of amounts per customer is correct and matches the underlying data.
- [ ] Widget updates when the source data changes (per the app’s flow).
- [ ] No obvious regressions in the rest of the dashboard.
- [ ] PR explains:
  - What was wrong in the initial implementation (logic, rendering, or state),
  - How you fixed it (including any tests).
- [ ] CI (tests for this challenge’s app) passes.

---

## Your task

You’re the engineer assigned to this ticket. The feature exists but is buggy; your job is to make it trustworthy and correct.

**Setup:**

1. Fork the repo (if you haven’t already; main is protected).
2. Clone your fork.
3. Go to `challenges/06-top-customers/app/` and follow the README to install deps and run the app.
4. Create a branch, e.g. `fix/06-top-customers`.

**What to focus on:**

- How the widget derives data from orders (aggregation logic).
- How and when it subscribes to or receives updates.
- Whether the sort and display order match the spec.

**Success =** acceptance criteria met, tests pass, PR description is clear and concise.

---

## Intended bugs (maintainers / AI agents only)

Intentional bugs for this challenge are listed in **[INTENTIONAL_BUGS.md](INTENTIONAL_BUGS.md)**. Do not expose that file to learners.

---

## Repo structure for this challenge

When implementing the app for this challenge, use:

```
challenges/06-top-customers/
  SPEC.md             # This file (public)
  INTENTIONAL_BUGS.md # Intentional bugs list (maintainers/agents only — do not expose to learners)
  app/                # The broken frontend app for this challenge
    README.md         # How to install and run
    package.json
    src/
    ...
```

Or a dedicated repo that links back to this spec.

