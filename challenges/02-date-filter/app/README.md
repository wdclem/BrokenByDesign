# Challenge 02 — Sales dashboard with date filter (broken)

A small React dashboard with a **date range filter** on Recent orders. The filter has intentional bugs. Your job: find and fix them, then open a PR.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Use the date filter (From / To) and Apply/Clear. Something is wrong — find it, fix it, and submit a PR (see the main challenge [SPEC](../SPEC.md)).

## Docker

```bash
docker build -t challenge-02-date-filter .
docker run -p 8080:80 challenge-02-date-filter
```

Open [http://localhost:8080](http://localhost:8080).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run test` — run tests (assert correct filter behavior; pass when bugs are fixed)
- `npm run test:watch` — run tests in watch mode
