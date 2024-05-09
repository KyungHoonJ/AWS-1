import { Router } from "express";

import login from "../services/user/login.js";
import logout from "../services/user/logout.js";
import regist from "../services/user/regist.js";
import getInfo from "../services/user/getInfo.js";

const router = Router();

// regist
router.post("/regist", regist);
// login
router.post("/login", login);
// logout
router.post("/logout", logout);
router.post("/info", getInfo);

export default router;
