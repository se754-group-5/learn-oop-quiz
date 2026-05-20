# oop-quiz-performance-test

A minimal OOP quiz and feedback MVP with JMeter performance testing.

## Tech stack

- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, Express, TypeScript
- Storage: In-memory Map (no database)

## How to run backend

```bash
cd backend
pnpm install
pnpm run dev
```

Server runs on http://localhost:3001.

## How to run frontend

```bash
cd frontend
pnpm install
pnpm run dev
```

Frontend runs on http://localhost:5173 by default.

## API endpoints

- GET /api/quizzes/oop-basics
- POST /api/quizzes/oop-basics/submissions
- GET /api/submissions/:submissionId/result

## JMeter files

Place Apache JMeter plans and results in:

src/test/resources/performancetest
