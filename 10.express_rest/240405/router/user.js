const router = require("express").Router();

const users = [];

router.post("/login", (req, res) => {
  const user = users.find((user) => user.id == req.body.id);
  if (user && user.pw == req.body.pw) res.cookie("user", user.name);
  res.redirect("/");
});

router.post("/regist", (req, res) => {
  if (req.body.pw == req.body.pwr) users.push({ ...req.body, pwr: undefined });
  res.redirect("/");

  //   if (req.body.pw != req.body.pwr) res.redirect("/?error=password");
  //   else {
  //     users.push({...req.body, pwr:undefined})
  //     res.redirect("/");
  //   }
});

router.post("/logout", (req, res) => {
  res.cookie("user", "", { maxAge: 0 });
  res.redirect("/");
});

module.exports = router;
