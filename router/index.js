const router = require("express").Router();
const board = require("./board");
const user = require("./user");

router.use((req, res, next) => {
  req.user = { id: req.cookies.userId, nick: req.cookies.user };
  next();
});

router.use("/user", user);
router.use("/", board);

module.exports = router;
