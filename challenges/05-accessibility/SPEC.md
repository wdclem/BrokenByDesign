# Challenge 05 — Accessibility pass on dashboard (L2)

**Level:** L2 — It works but…  
**Skills:** Web accessibility (a11y), semantics, focus management, ARIA basics  
**Practices:** Reading an accessibility report, improving UX without changing core behavior, writing rationale in PR. See [design goals](../../docs/DESIGN.md#1-audience-and-learning-goals).

---

## Ticket (as a junior would see it)

**Title:** Dashboard — fix accessibility issues (a11y audit)

**Type:** Bug / Improvement · **Priority:** Medium · **Component:** Frontend — Dashboard

**Description**

An internal accessibility review found several issues on the Sales dashboard:

- Screen reader users have trouble understanding the **stat cards** (Revenue, Orders, Customers).  
- Keyboard users struggle to navigate the **Recent orders** table and any interactive controls.  
- Some landmarks/labels are missing or unclear.

We need a small accessibility pass so the dashboard is usable for keyboard and screen reader users, without changing the core visual design.

*Comment from PM: “We don’t need to be perfect WCAG experts, but we should hit the basics and not block users who rely on keyboard or screen readers.”*

**Steps to reproduce** (examples)

1. Open the dashboard and try to navigate **only with the keyboard** (Tab, Shift+Tab, Enter, Space).
2. Use a screen reader (or browser devtools accessibility tree) to inspect:
   - How the stat cards are announced,
   - How the table and its headers are exposed,
   - How any interactive controls are labeled.

**Acceptance criteria**

- [ ] Stat cards have meaningful semantics (e.g. clear heading levels, labels that make sense to a screen reader).
- [ ] Keyboard users can reach and activate all interactive elements (e.g. table controls, filters) in a logical order.
- [ ] The Recent orders table uses appropriate table markup (e.g. `table`, `thead`, `tbody`, `th`/`td` with correct headers).
- [ ] Key interactive elements have accessible names (e.g. via `aria-label`, `aria-labelledby`, or text labels).
- [ ] Visual design and layout remain effectively the same (within minor changes needed for semantics/focus).
- [ ] PR explains:
  - Which a11y issues you addressed,
  - What changes you made and why (briefly referencing a11y concepts).
- [ ] CI (tests for this challenge’s app) passes (tests may include a few basic a11y checks).

---

## Your task

You’re the engineer assigned to this ticket. Use the existing dashboard markup and styles, identify accessibility problems, and improve semantics and keyboard/screen reader behavior.

**Setup:**

1. Fork the repo (if you haven’t already; main is protected).
2. Clone your fork.
3. Go to `challenges/05-accessibility/app/` and follow the README there to install deps and run the app.
4. Create a branch, e.g. `fix/05-accessibility`.

**What to focus on:**

- Headings and landmarks (what does a screen reader “see”?).
- Keyboard focus order and visibility.
- Accessible names and roles for controls and key sections.

**Success =** acceptance criteria met, tests pass, PR description is clear and concise.

---

## Intended bugs (maintainers / AI agents only)

Intentional accessibility issues for this challenge are listed in **[INTENTIONAL_BUGS.md](INTENTIONAL_BUGS.md)**. Do not expose that file to learners.

---

## Repo structure for this challenge

When implementing the app for this challenge, use:

```
challenges/05-accessibility/
  SPEC.md             # This file (public)
  INTENTIONAL_BUGS.md # Intentional a11y issues (maintainers/agents only — do not expose to learners)
  app/                # The broken frontend app for this challenge
    README.md         # How to install and run
    package.json
    src/
    ...
```

Or a dedicated repo that links back to this spec.

