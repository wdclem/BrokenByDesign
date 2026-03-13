# Challenge 01 — Broken frontend (L1)

**Level:** L1 — Broken frontend  
**Skills:** Reading code, devtools, basic debugging, Git (branch, commit, PR)

---

## Objective

The provided app is a small frontend (e.g. a single-page site or one component) with **one or more intentional bugs**. Your job is to find and fix them, then open a PR with a clear description of what was wrong and how you fixed it.

---

## Setup

1. Clone the challenge repo (or use the app in `challenges/01-broken-frontend/app/`).
2. Install deps and run the app (see repo README).
3. Observe: something is broken (layout, behavior, or data display).

---

## Tasks

1. **Reproduce** — Confirm what’s broken (what you see vs. what you expect). Note steps if needed.
2. **Debug** — Use devtools, logs, and code reading to find the cause.
3. **Fix** — Make a minimal fix. Keep code readable.
4. **Submit** — Open a branch `fix/01-broken-frontend`, commit, push, open a PR. In the PR description:
   - What was broken (symptom).
   - Root cause (why it happened).
   - What you changed and why.

---

## Success criteria (for review)

- [ ] The reported bug is fixed; behavior/layout matches the intended design.
- [ ] No new regressions (rest of app still works).
- [ ] PR description explains symptom, cause, and fix.
- [ ] Code changes are minimal and readable.
- [ ] CI passes: `npm run test` in the app must pass (tests assert correct behavior).

---

## Intended bugs (for maintainers only — do not expose to learners)

1. **Wrong data (Orders card):** The "Orders" stat card displays `stats.revenue` instead of `stats.ordersCount`, so it shows 12450 instead of 89.
2. **Missing null check (table):** One row in `recentOrders` has `customer: null`. The code uses `order.customer.name` with no optional chaining or fallback, so it throws (or shows "undefined") for that row. Expected fix: display a fallback for null customer (e.g. `"—"` or `"Guest"`) so the table renders without throwing.
3. **Layout (Orders card):** The Orders card has `className="cardd"` (typo) instead of `className="card"`, so it doesn’t get the same styling (background, padding, shadow) as the other cards.

---

## Repo structure for this challenge

When implementing the actual broken app, use:

```
challenges/01-broken-frontend/
  SPEC.md       # This file (public)
  app/          # The broken frontend app (learners clone/fork this or work in repo)
    README.md   # How to install and run
    package.json
    src/
    ...
```

Or a dedicated repo that links back to this spec.
