import { Router } from "express";
import getList from "../services/board/list.js";
import write from "../services/board/write.js";

const router = Router();

router.post("/list", getList);
router.post("/write", write);

export default router;
