import { Router } from "express";
import board from "./board.js";

const router = Router();
router.use("/board", board);

export default router;

// export const temp = () => {};
// export const temp1 = () => {};
// export const temp2 = () => {};
// export const temp3 = () => {};
// module.exports = {temp}
// module.exports = {temp1}
