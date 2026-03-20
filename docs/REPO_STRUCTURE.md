# Repo structure

**BrokenByDesign** is the meta-repo: design, challenge specs, and (optionally) shared tooling.

```
BrokenByDesign/
  README.md
  docs/
    DESIGN.md           # Design doc (audience, levels, workflow, AI review)
    REPO_STRUCTURE.md
  challenges/
    01-broken-frontend/
      SPEC.md
      INTENTIONAL_BUGS.md
      app/                # Implemented (stats + table bugs)
    02-date-filter/
      SPEC.md
      INTENTIONAL_BUGS.md
      app/                # Implemented (date filter bugs)
    03-loading-error/
      SPEC.md
      INTENTIONAL_BUGS.md
      app/                # Implemented (loading/error/retry bugs)
    04-table-sort/
      SPEC.md
      INTENTIONAL_BUGS.md
      app/                # Implemented (table sort logic/state bugs)
    05-accessibility/
      SPEC.md
      INTENTIONAL_BUGS.md
      app/                # Implemented (semantics/keyboard/labels issues)
    06-top-customers/
      SPEC.md
      INTENTIONAL_BUGS.md
      app/                # Implemented (feature bugs in top customers widget)
```

**Per challenge repo (when separate):** Clone target for learners. Contains broken app + README + link to challenge spec. See [DESIGN.md](DESIGN.md) §4.

**First run:** Start with `challenges/01-broken-frontend/app/` (or any challenge you want), then run one full cycle: fork → clone your fork → fix → PR on fork → automated tests → merge.
