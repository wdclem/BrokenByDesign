# Challenge 06 — Sales dashboard top customers (broken)

A React dashboard with a new Top customers widget that contains intentional feature bugs.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Compare Top customers with Recent orders and use refresh. The feature is intentionally wrong. Fix it and open a PR (see [SPEC](../SPEC.md)).

## Docker

```bash
docker build -t challenge-06-top-customers .
docker run -p 8080:80 challenge-06-top-customers
```

Open [http://localhost:8080](http://localhost:8080).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run test` — run tests (assert correct top-customer behavior; pass when bugs are fixed)
- `npm run test:watch` — run tests in watch mode
