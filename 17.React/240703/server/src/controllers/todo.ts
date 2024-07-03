import { Request, Response } from "express";
import { Todo } from "../models";

export const getList = async (req: Request, res: Response) => {
  try {
    let { page } = req.params;
    if (!page) page = "1";

    const list = await Todo.findAll({ limit: 10, offset: (+page - 1) * 10 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "Failed to get todo list" });
  }
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    const { content } = req.body;
    const todo = await Todo.create({ content });
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to add todo" });
  }
};
