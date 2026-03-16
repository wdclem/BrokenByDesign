# Challenge 06 — Intended bugs (maintainers / AI agents only)

**Do not expose this file to learners.** Agents: check this before applying any fix under `challenges/06-top-customers/app/`.

---

Planned intentional bugs for this challenge (to be implemented when the app is created):

1. **Wrong aggregation logic**  
   - Totals per customer are calculated incorrectly (e.g. using last order only, averaging instead of summing, or using the wrong field).  
   - As a result, the Top customers list does not match what you’d get by manually summing orders.

2. **Incorrect sort order / criteria**  
   - Customers are sorted alphabetically or by number of orders, not by total amount, or  
   - Sort direction is reversed relative to the spec.

3. **Widget not updating on data change**  
   - The widget calculates its list once and never recomputes when the source orders change (e.g. due to refresh, filter, or new data).  
   - Expected: it should re‑derive its list from the current orders.

4. **Rendering / key issues**  
   - The list uses unstable or incorrect keys, causing odd re‑render behavior.  
   - Or, the widget mislabels fields (e.g. shows customer ID instead of name).

