const router = require("express").Router();

// const cookieTest = require("./cookie_test");
// router.use(cookieTest);

const user = require("./user");
const board = require("./board");

router.use((req, res, next) => {
  res.templateData = {
    title: "",
    styles: ["/index.css"],
  };
  next();
});

router.use("/", board);
router.use("/user", user);

module.exports = router;
