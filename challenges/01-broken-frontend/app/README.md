# Challenge 01 — Sales dashboard (broken)

A small React dashboard with intentional bugs. Your job: find and fix them, then open a PR.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). You should see a Sales dashboard with stat cards and a recent-orders table. Something is wrong — find it, fix it, and submit a PR (see the main challenge [SPEC](../SPEC.md)).

## Docker (deploy)

```bash
docker build -t challenge-01-dashboard .
docker run -p 8080:80 challenge-01-dashboard
```

Open [http://localhost:8080](http://localhost:8080).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
