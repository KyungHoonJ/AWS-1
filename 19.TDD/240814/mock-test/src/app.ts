import express, { Express, Request, Response } from "express";

import todo from "./controllers/todo";

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/todo", todo);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(process.env.MESSAGE || "AWS's Members");
});

export default app;
