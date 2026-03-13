# Repo structure

**BrokenByDesign** is the meta-repo: design, challenge specs, and (optionally) shared tooling.

```
BrokenByDesign/
  README.md
  docs/
    DESIGN.md       # Design doc (audience, levels, workflow, AI review)
    REPO_STRUCTURE.md
  challenges/
    01-broken-frontend/
      SPEC.md       # Challenge spec (objective, tasks, success criteria)
      app/          # (To implement) The broken frontend app
```

**Per challenge repo (when separate):** Clone target for learners. Contains broken app + README + link to challenge spec. See [DESIGN.md](DESIGN.md) §4.

**First run:** Implement the app in `challenges/01-broken-frontend/app/` (or a separate repo), then run one full cycle: clone → fix → PR → AI review → merge.
