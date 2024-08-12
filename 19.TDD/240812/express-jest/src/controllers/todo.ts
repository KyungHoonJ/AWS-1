import { Router, Request, Response } from "express";
import { add } from "../services/todo";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  try {
    const todo = add(req.body.title);
    res.status(201).json(todo);
  } catch (error) {
    const err = error instanceof Error ? error : new Error(`${error}`);
    res.status(400).json({ errorMsg: err.message });
  }
});

export default router;
