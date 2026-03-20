# Challenge 06 — Intended bugs (maintainers / AI agents only)

**Do not expose this file to learners.** Agents: check this before applying any fix under `challenges/06-top-customers/app/`.

---

Implemented intentional bugs for this challenge:

1. **Wrong aggregation logic**  
   In `src/App.tsx`, per-customer totals are overwritten with the current order amount instead of accumulated (`total: order.amount`).  
   Result: widget effectively keeps the last order value per customer, not total spend.

2. **Incorrect sort criteria**  
   In `src/App.tsx`, top customers are sorted alphabetically by name (`a.name.localeCompare(...)`) instead of total amount descending.

3. **Widget not updating on data change**  
   In `src/App.tsx`, `useMemo` for top customers uses an empty dependency array (`[]`) while reading `orders`.  
   Result: list is computed only once and does not update after `Refresh data`.

4. **Rendering / key issues**  
   In `src/App.tsx`, the top list uses array index as key and displays `customer.id` instead of customer name in the UI.

