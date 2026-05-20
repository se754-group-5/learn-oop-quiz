import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { quizRoutes } from "./routes/quizRoutes";
import { submissionRoutes } from "./routes/submissionRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(quizRoutes);
app.use(submissionRoutes);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: "Unexpected server error.", detail: err.message });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
