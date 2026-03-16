# Challenge 01 — Intended bugs (maintainers / AI agents only)

**Do not expose this file to learners.** Agents: check this before applying any fix under `challenges/01-broken-frontend/app/`.

---

1. **Wrong data (Orders card)**  
   The "Orders" stat card displays `stats.revenue` instead of `stats.ordersCount`, so it shows 12450 instead of 89.

2. **Missing null check (table)**  
   One row in `recentOrders` has `customer: null`. The code uses `order.customer!.name` with no optional chaining or fallback, so it throws at runtime for that row. Expected fix: display a fallback for null customer (e.g. "—" or "Guest") so the table renders without throwing.

3. **Layout (Orders card)**  
   The Orders card has `className="cardd"` (typo) instead of `className="card"`, so it doesn’t get the same styling (background, padding, shadow) as the other cards.
