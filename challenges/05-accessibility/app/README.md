# Challenge 05 — Sales dashboard accessibility pass (broken)

A small React dashboard with intentional accessibility issues to fix.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Inspect with keyboard navigation and accessibility tree/screen reader. The app has intentional a11y problems. Fix them and open a PR (see [SPEC](../SPEC.md)).

## Docker

```bash
docker build -t challenge-05-accessibility .
docker run -p 8080:80 challenge-05-accessibility
```

Open [http://localhost:8080](http://localhost:8080).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run test` — run tests (assert expected accessibility behavior; pass when bugs are fixed)
- `npm run test:watch` — run tests in watch mode
