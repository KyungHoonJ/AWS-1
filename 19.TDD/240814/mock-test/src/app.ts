import express, { Express, Request, Response } from "express";
import cors from "cors";

import todo from "./controllers/todo";

const app: Express = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/todo", todo);

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send(process.env.MESSAGE || "AWS's Members");
});

export default app;
