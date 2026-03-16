# Challenge 02 — Intended bugs (maintainers / AI agents only)

**Do not expose this file to learners.** Agents: check this before applying any fix under `challenges/02-date-filter/app/`.

---

Draft intentional bugs for this challenge (to be implemented when the app is created):

1. **Off‑by‑one / wrong comparison in date filter**  
   The filtering logic uses a comparison that excludes start or end dates incorrectly (e.g. `>` instead of `>=`, or `<` instead of `<=`), so orders on the boundary dates are missing or extra.

2. **Wrong field or format used for filtering**  
   The code compares the selected date range against the wrong field or compares string dates without converting to `Date`, causing orders outside the range to slip through or be filtered out incorrectly.

3. **Filter reset / “show all” behavior broken**  
   Clearing the date filter does not restore the full list (e.g. stale filtered array is reused, or state is not reset). Expected: clearing the filter shows all recent orders again.

