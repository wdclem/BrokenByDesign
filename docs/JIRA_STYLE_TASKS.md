# Jira-style tasks for challenges

**Goal:** Write challenge tasks so they feel like real tickets a junior might get from a PM, support, or senior dev — same structure, ambiguity, and tone as Jira/Linear/Notion.

---

## Alignment: simulate a junior environment

**Overall aim:** Simulate a junior engineer environment as close as possible.

**Vagueness spectrum (like real life):**

- Tasks can range from **precise** ("Fix the Orders card: it shows revenue instead of order count — see AC in ticket") to **very vague** ("Dashboard is broken", "Something’s wrong with the stats", or even just **a broken page with no ticket** — the only starting point is "the page doesn’t work").
- For a set of exercises, consider **increasing vagueness** over time: start with a clear ticket, later give only "the site is broken, make it match the design" so the learner infers scope from the app and tests.

**Same environment across a set of exercises:**

- In real life juniors often work on **one codebase** and get **multiple tickets or bugs** over time. It can be useful to keep the **same app** (e.g. same dashboard) for several challenges: same repo, same UI, different tickets or different bugs each time. That reinforces navigation of a real codebase and "this is my project now" feeling.
- Optional: later challenges in the same app can assume prior fixes are merged (or provide a branch with previous fixes) so the scenario stays consistent.

**In real life, are junior tasks precise or vague? Both.**

- **Precise:** "Change the label on the Submit button to 'Save'" — one clear AC, one place to edit.
- **Vague / multi-issue:** "Dashboard has issues", "Fix the checkout flow", "Users report errors on the orders page" — learner must discover how many issues there are and what "done" looks like.
- Design challenges to support **both**: some exercises with a clear, narrow ticket; others with a single vague ticket or no ticket (just a broken page and success criteria). See the template below for the ticket format; for "no ticket" exercises, the SPEC can be just success criteria + "reproduce and fix what’s wrong".

---

## Why match real tickets?

- **Context:** Juniors spend real time parsing vague descriptions and turning them into concrete work.
- **Skills:** Extracting "what’s actually broken / what’s actually needed" from noisy tickets is part of the job.
- **Realism:** Tickets are often underspecified, duplicate, or slightly wrong; practice here transfers to the job.

---

## Typical shape of a real ticket (bug)

What a junior often sees:

| Field | What it usually looks like |
|-------|-----------------------------|
| **Title** | Short, sometimes vague or misleading ("Dashboard issue", "Orders card wrong") |
| **Description** | Mix of symptom, guesswork, and noise ("Users say the orders card is wrong. Maybe a backend issue? See Slack.") |
| **Steps to reproduce** | Optional; sometimes missing or wrong |
| **Expected vs actual** | Sometimes clear, often implied or missing |
| **Acceptance criteria** | May be vague ("Should show correct data") or very detailed |
| **Labels** | `bug`, `frontend`, `P2`, etc. — use sparingly for flavour |
| **Comments** | Can add "from PM: can we also check the other cards?" to simulate thread noise |

---

## Template for challenge tasks (Jira-style)

Use this when drafting a challenge so the learner sees a **ticket** first, then the repo.

```markdown
## Ticket (as a junior would see it)

**Title:** [Short, possibly vague — e.g. "Dashboard: Orders card shows wrong number"]

**Type:** Bug | Task | Story  
**Priority:** Medium (optional)  
**Component:** Frontend / Dashboard (optional)

**Description**
[2–4 sentences: symptom, maybe a wrong hypothesis, maybe a link to "see design" or "ask Bob". Keep it a bit messy.]

**Steps to reproduce** (if bug)
1. Open the dashboard.
2. [What they see vs what they expect.]

**Acceptance criteria**
- [ ] [Concrete, testable — e.g. "Orders card displays the orders count (89), not revenue"]
- [ ] [No regressions / rest of dashboard unchanged]
- [ ] [Optional: PR with short explanation]

**Notes / comments** (optional)
- "Design: [link or one line]. We want consistency with Revenue and Customers cards."
- "Reported by support — multiple users."
```

---

## Example: Challenge 01 as a Jira ticket

Below is how Challenge 01 could be presented **as a ticket** (without revealing the three separate bugs). You can use this verbatim in SPEC.md or adapt it.

---

**Title:** Dashboard: stat cards and table issues (orders card + recent orders)

**Type:** Bug  
**Priority:** Medium  
**Component:** Frontend — Dashboard

**Description**

Support reports that on the internal dashboard, the Orders card doesn’t match what we expect, and something’s wrong with the recent orders table (blank or error for one row). Revenue and Customers cards seem fine. Need to fix so the dashboard matches the design and doesn’t throw errors.

**Steps to reproduce**

1. Run the dashboard app locally (see README).
2. Check the three stat cards at the top: Revenue, Orders, Customers.
3. Scroll to the "Recent orders" table and confirm all rows render.

**Acceptance criteria**

- [ ] Orders card shows the **number of orders** (e.g. 89), not revenue.
- [ ] All three stat cards share the same visual style (card layout).
- [ ] Recent orders table renders all rows without errors; rows with missing customer data show a sensible fallback (e.g. "—" or "Guest"), not "undefined" or a crash.
- [ ] No regressions: Revenue and Customers cards still correct, existing behaviour preserved.
- [ ] PR description briefly explains what was wrong and how you fixed it.

**Notes**

- Design reference: stat cards should look and behave consistently.
- If something crashes or shows "undefined", track down the root cause (e.g. null reference) and fix it defensively.

---

## Tips for authors (head-of-engineering perspective)

1. **One ticket, multiple bugs:** Real tickets often bundle several issues ("dashboard issues"). Let the learner discover that there are 2–3 separate causes; don’t list them in the ticket.
2. **Wrong hypothesis in the ticket:** Include a red herring ("Maybe a backend issue?") so they practice verifying assumptions.
3. **Vague AC:** One acceptance criterion can be intentionally vague ("matches design") so they have to infer from the app or ask.
4. **Repro steps incomplete:** Omit one step or leave "see Slack" so they get used to filling gaps.
5. **Labels and priority:** Add P2, `frontend`, `dashboard` occasionally so the format feels familiar; don’t overdo it.
6. **Comments thread:** In a separate "Comments" or "Notes" section, add one line from "PM" or "Support" to simulate a thread without overloading the ticket.

---

## Where this lives in the repo

- **Per challenge:** The SPEC can include a "Ticket (as a junior would see it)" section at the top (or link to a `TICKET.md` in the challenge folder).
- **This doc:** [docs/JIRA_STYLE_TASKS.md](JIRA_STYLE_TASKS.md) — reference it when creating or updating challenges so new tasks stay close to what juniors encounter in Jira.
