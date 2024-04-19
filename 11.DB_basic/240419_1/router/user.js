const router = require("express").Router();
const { user } = require("../lib/mysql");

router.post("/regist", (req, res) => {
  user.create(req.body);
  //   res.send("ok");
  res.redirect("/");
});

module.exports = router;
