const router = require("express").Router();

router.use("/api", require("./api"));
router.use("/", require("./view"));

module.exports = router;
