# Challenge 05 — Intended accessibility issues (maintainers / AI agents only)

**Do not expose this file to learners.** Agents: check this before applying any fix under `challenges/05-accessibility/app/`.

---

Implemented intentional a11y issues for this challenge:

1. **Stat cards lack meaningful semantics**  
   In `src/App.tsx`, stat cards only render numeric values with plain `div` elements and no clear labels/headings per card.  
   Result: screen reader users get values with poor context.

2. **Keyboard focus problem on action control**  
   In `src/App.tsx`, the search action is a styled `div` with `tabIndex={-1}` instead of a real button.  
   Result: it is not keyboard-focusable in normal tab order.

3. **Table header semantics incorrect**  
   In `src/App.tsx`, the table header row uses `<td>` cells instead of `<th>` elements.  
   Result: column headers are not exposed correctly to assistive tech.

4. **Missing accessible names / labels**  
   In `src/App.tsx`, the search input has a visually hidden text node but no proper label association (`htmlFor`/`id` or `aria-label`).  
   Also, the icon-only action control has no accessible name.

