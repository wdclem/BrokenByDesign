# Challenge 03 — Intended bugs (maintainers / AI agents only)

**Do not expose this file to learners.** Agents: check this before applying any fix under `challenges/03-loading-error/app/`.

---

Implemented intentional bugs for this challenge:

1. **No visible loading state / flicker**  
   In `src/App.tsx`, `loadData()` sets `loading` to `true` and then immediately to `false` before awaiting the async request.  
   Result: users do not get a reliable loading indicator while data is still in flight.

2. **Error state not surfaced**  
   In `src/App.tsx`, the `catch` block only logs to console and never updates `error` state.  
   Result: on failed requests, the UI shows no actionable error message.

3. **Retry logic broken or misleading**  
   The Retry button handler only clears `error` (`setError(null)`) and does not call `loadData()` again.  
   Result: retry does not trigger a fresh fetch.

