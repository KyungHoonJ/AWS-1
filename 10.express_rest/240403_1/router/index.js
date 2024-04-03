const router = require("express").Router();
const board = require("./board");

router.use("/", board);

module.exports = router;
