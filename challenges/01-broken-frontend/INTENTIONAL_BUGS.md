# Challenge 01 — Intentional bugs (maintainers / AI agents only)

**Do not expose this file to learners.** Use it to verify that any proposed fix in `challenges/01-broken-frontend/app/` is **not** fixing one of these intentional bugs (unless the user is solving the challenge).

---

## List of intentional bugs

1. **Wrong data (Orders card)**  
   The "Orders" stat card displays `stats.revenue` instead of `stats.ordersCount`, so it shows 12450 instead of 89.

2. **Missing null check (table)**  
   One row in `recentOrders` has `customer: null`. The code uses `order.customer.name` with no optional chaining or fallback, so it throws (or shows "undefined") for that row.  
   *Expected fix:* display a fallback for null customer (e.g. "—" or "Guest") so the table renders without throwing.

3. **Layout (Orders card)**  
   The Orders card has `className="cardd"` (typo) instead of `className="card"`, so it doesn’t get the same styling (background, padding, shadow) as the other cards.
