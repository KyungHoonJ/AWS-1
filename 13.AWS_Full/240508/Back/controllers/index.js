import { Router } from "express";
import board from "./board.js";
import user from "./user.js";

import checkLog from "../services/user/checkLog.js";

const router = Router();
// router.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin',"*")
// })
router.use(checkLog);
router.use("/board", board);
router.use("/user", user);

export default router;

// export const temp = () => {};
// export const temp1 = () => {};
// export const temp2 = () => {};
// export const temp3 = () => {};
// module.exports = {temp}
// module.exports = {temp1}
