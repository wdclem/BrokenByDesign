# Challenge 04 — Intended bugs (maintainers / AI agents only)

**Do not expose this file to learners.** Agents: check this before applying any fix under `challenges/04-table-sort/app/`.

---

Implemented intentional bugs for this challenge:

1. **String vs numeric sort for Amount**  
   In `src/App.tsx`, Amount sorting compares `String(a.amount)` vs `String(b.amount)` using `localeCompare` instead of numeric comparison.  
   Result: numeric order can be wrong.

2. **Wrong field used for Date sort**  
   In `src/App.tsx`, the Date sort branch compares `a.id` and `b.id` instead of date values.  
   Result: clicking Date does not sort chronologically.

3. **In‑place mutation of the data array**  
   In `src/App.tsx`, `recentOrders.sort(...)` is called directly (no copied array).  
   Result: original data order is mutated in place.

4. **Sort direction toggle logic broken**  
   In `src/App.tsx`, clicking the same column always sets direction to `'asc'` instead of toggling.  
   Result: repeated clicks do not switch between ascending and descending.

