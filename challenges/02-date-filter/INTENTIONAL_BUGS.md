# Challenge 02 — Intended bugs (maintainers / AI agents only)

**Do not expose this file to learners.** Agents: check this before applying any fix under `challenges/02-date-filter/app/`.

---

1. **Off‑by‑one / wrong comparison in date filter**  
   In `filterOrders`, the logic uses **exclusive** bounds: `order.date > startDate` (and the end comparison is wrong; see bug 2). So boundary dates are excluded. Expected: use `>=` and `<=` for inclusive range with correct field.

2. **Wrong field used for end date comparison**  
   The filter compares `order.id < endDate` instead of `order.date <= endDate`. So the end-of-range check is wrong. Expected: compare `order.date` to both `startDate` and `endDate`.

3. **Filter reset / “show all” behavior broken**  
   `displayedOrders` is held in state. When the user clicks Clear, `startDate` and `endDate` are reset but `displayedOrders` is never set back to `recentOrders`. Expected: when clearing, set `displayedOrders` to the full list or derive displayed list from filter state.

