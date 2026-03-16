# Challenge 03 — Intended bugs (maintainers / AI agents only)

**Do not expose this file to learners.** Agents: check this before applying any fix under `challenges/03-loading-error/app/`.

---

Planned intentional bugs for this challenge (to be implemented when the app is created):

1. **No visible loading state / flicker**  
   The dashboard either:
   - Renders empty or stale content while the request is in flight, or  
   - Briefly shows “Loading…” and then immediately hides it before data has actually arrived (due to incorrect state updates).

2. **Error state not surfaced**  
   When the fetch fails:
   - The error is swallowed (e.g. `catch` just logs to console), or  
   - The UI stays in a “loading” state forever, or  
   - The UI shows an empty table with no explanation.
   Expected: a clear error message and a simple retry action.

3. **Retry logic broken or misleading**  
   The retry button:
   - Does nothing (handler not wired correctly), or  
   - Reuses stale data without actually re‑calling the API, or  
   - Leaves the UI stuck in loading or error.
   Expected: retry triggers a fresh fetch and updates the UI on success.

