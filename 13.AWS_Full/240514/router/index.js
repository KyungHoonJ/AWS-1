const router = require("express").Router();
const cookie = require("./cookie.js");
const session = require("./session.js");
const session1 = require("./session1.js");

router.use("/cookie", cookie);
router.use("/session", session);
router.use("/session1", session1);

module.exports = router;
