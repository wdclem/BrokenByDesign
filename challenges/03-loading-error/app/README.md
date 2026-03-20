# Challenge 03 — Sales dashboard loading/error states (broken)

A small React dashboard that now fetches data asynchronously. Loading, error handling, and retry behavior are intentionally broken.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Use the simulated failure toggle and retry flow. Something is wrong: loading and error states do not behave correctly. Fix it and open a PR (see [SPEC](../SPEC.md)).

## Docker

```bash
docker build -t challenge-03-loading-error .
docker run -p 8080:80 challenge-03-loading-error
```

Open [http://localhost:8080](http://localhost:8080).

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run test` — run tests (assert correct loading/error/retry behavior; pass when bugs are fixed)
- `npm run test:watch` — run tests in watch mode
