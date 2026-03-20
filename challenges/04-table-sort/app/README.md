# Challenge 04 — Sales dashboard table sort (broken)

A small React dashboard where the Recent orders table sort behavior is intentionally broken.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Click the Amount and Date headers in the table. Sorting behaves strangely on purpose. Fix it and open a PR (see [SPEC](../SPEC.md)).

## Docker

```bash
docker build -t challenge-04-table-sort .
docker run -p 8080:80 challenge-04-table-sort
```

Open [http://localhost:8080](http://localhost:8080).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run test` — run tests (assert correct sort behavior; pass when bugs are fixed)
- `npm run test:watch` — run tests in watch mode
