# Repo structure

**BrokenByDesign** is the meta-repo: design, challenge specs, and (optionally) shared tooling.

```
BrokenByDesign/
  README.md
  docs/
    DESIGN.md           # Design doc (audience, levels, workflow, AI review)
    JIRA_STYLE_TASKS.md  # How to write tasks as Jira-style tickets (junior-realistic)
    REPO_STRUCTURE.md
  challenges/
    01-broken-frontend/
      SPEC.md             # Challenge spec (objective, tasks, success criteria)
      INTENTIONAL_BUGS.md # Intentional bugs list (maintainers/agents only — do not expose to learners)
      app/                # (To implement) The broken frontend app
```

**Per challenge repo (when separate):** Clone target for learners. Contains broken app + README + link to challenge spec. See [DESIGN.md](DESIGN.md) §4.

**First run:** Implement the app in `challenges/01-broken-frontend/app/` (or a separate repo), then run one full cycle: fork → clone your fork → fix → PR on fork → automated tests → merge.
