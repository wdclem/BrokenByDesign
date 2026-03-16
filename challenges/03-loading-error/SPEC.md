# Challenge 03 — Loading & error states (L1)

**Level:** L1 — Broken frontend  
**Skills:** Async flow, loading/error UI, conditional rendering, basic state management  
**Practices:** Reproducing flaky bugs, thinking through user experience on slow/error network, clear PR communication. See [design goals](../../docs/DESIGN.md#1-audience-and-learning-goals).

---

## Ticket (as a junior would see it)

**Title:** Dashboard — loading spinner / error state is broken

**Type:** Bug · **Priority:** Medium · **Component:** Frontend

**Description**

We recently updated the internal Sales dashboard to fetch data from an API instead of hard‑coded values. Support reports that:

- Sometimes users see a **blank screen** or old data while the dashboard is loading, and  
- When the request **fails**, they don’t see any helpful error — just an empty table or a generic browser error.

We need clear loading and error states so people know what’s going on, and the dashboard never feels “frozen” or broken.

*Comment from PM: “If the data can’t load, at least tell people and give them a way to retry.”*

**Steps to reproduce** (example; actual UI may differ)

1. Run the app and open the dashboard (see README in the app folder for this challenge).
2. Simulate a **slow network** or delayed response (e.g. devtools throttling or built‑in artificial delay).
3. Simulate a **failed request** (e.g. toggle a flag or change the URL so it errors).
4. Observe that:
   - There is no obvious loading indicator, or
   - The dashboard keeps showing stale data, or
   - The error state is missing/unclear.

**Acceptance criteria**

- [ ] While data is loading, the dashboard shows a clear loading state (e.g. spinner or “Loading data…” message) instead of a blank or misleading UI.
- [ ] When the request fails, a clear error message is shown (e.g. “Couldn’t load dashboard data”) with a simple retry option.
- [ ] On success after retry, the UI updates with fresh data.
- [ ] No regressions: when the request succeeds normally, the dashboard shows the correct data with no extra flicker or stuck loading.
- [ ] Open a PR on your fork explaining:
  - The symptom you observed,
  - The root cause in the code,
  - What you changed and why (especially around async / state).
- [ ] CI (tests for this challenge’s app) passes.

---

## Your task

You’re the engineer assigned to this ticket. Get the app running, reproduce the issues around loading and errors, then fix them with minimal, clear changes.

**Setup:**

1. Fork the repo (if you haven’t already; main is protected).
2. Clone your fork.
3. Go to `challenges/03-loading-error/app/` and follow the README there to install deps and run the app.
4. Create a branch, e.g. `fix/03-loading-error`.

**What to focus on:**

- How the API call is made (where, when, and with what dependencies).
- How loading and error state are represented in the code.
- What the user actually sees on slow network or error.

**Success =** acceptance criteria met, tests pass, PR description is clear and concise.

---

## Intended bugs (maintainers / AI agents only)

Intentional bugs for this challenge are listed in **[INTENTIONAL_BUGS.md](INTENTIONAL_BUGS.md)**. Do not expose that file to learners.

---

## Repo structure for this challenge

When implementing the app for this challenge, use:

```
challenges/03-loading-error/
  SPEC.md             # This file (public)
  INTENTIONAL_BUGS.md # Intentional bugs list (maintainers/agents only — do not expose to learners)
  app/                # The broken frontend app for this challenge
    README.md         # How to install and run
    package.json
    src/
    ...
```

Or a dedicated repo that links back to this spec.

