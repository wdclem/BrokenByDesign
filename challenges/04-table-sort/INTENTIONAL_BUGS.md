# Challenge 04 — Intended bugs (maintainers / AI agents only)

**Do not expose this file to learners.** Agents: check this before applying any fix under `challenges/04-table-sort/app/`.

---

Planned intentional bugs for this challenge (to be implemented when the app is created):

1. **String vs numeric sort for Amount**  
   Amounts are stored as numbers but sorted using string comparison (or vice‑versa), leading to incorrect order (e.g. `100` coming before `9`).

2. **Lexicographic date sort or wrong field**  
   Dates are compared as raw strings in a format where lexicographic order doesn’t match chronological order, or the wrong field is used for sorting. Result: Date sort looks random to users.

3. **In‑place mutation of the data array**  
   The code calls `array.sort(...)` directly on the original data source, causing:
   - Permanent changes to the base order, or  
   - Other parts of the UI to break or behave oddly.
   Expected: derive a sorted copy instead of mutating the source.

4. **Sort direction toggle logic broken**  
   Clicking the same column header multiple times:
   - Does not toggle direction consistently, or  
   - Resets to an unexpected state.
   Expected: a simple, predictable toggle (e.g. unsorted → ascending → descending → ascending…).

