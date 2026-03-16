# Challenge 05 — Intended accessibility issues (maintainers / AI agents only)

**Do not expose this file to learners.** Agents: check this before applying any fix under `challenges/05-accessibility/app/`.

---

Planned intentional a11y issues for this challenge (to be implemented when the app is created):

1. **Stat cards lack meaningful semantics**  
   - Stat cards are plain `div`s with no headings or labels understandable to screen readers.  
   - Screen reader output is confusing or incomplete (e.g. just “$12450” with no context).

2. **Keyboard focus problems**  
   - Some interactive elements (e.g. filters, buttons) are not reachable via keyboard (no focusable element or incorrect element type).  
   - Focus order is illogical (e.g. jumps from header to footer, skipping content).

3. **Table semantics incomplete or incorrect**  
   - Table uses `div`s instead of `table`/`thead`/`tbody`, or  
   - Header cells (`th`) are missing or not associated with the correct columns, making the table hard to understand with a screen reader.

4. **Missing accessible names / labels**  
   - Buttons or controls have no visible text and no `aria-label`, so screen readers announce them as “button” with no description.  
   - Inputs lack associated labels.

