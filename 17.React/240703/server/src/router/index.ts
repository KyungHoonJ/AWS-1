import { Router } from "express";
import { addTodo, getList } from "../controllers/todo";

const router: Router = Router();

router.get("/todo/:page", getList);
router.post("/todo", addTodo);

export default router;
