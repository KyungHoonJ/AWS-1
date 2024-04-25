const router = require("express").Router();

const users = [];

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/regist", (req, res) => {
  res.render("regist");
});

router.post("/regist", (req, res) => {
  users.push({ ...req.body, id: users.length + 1 });
  res.redirect("/user/login");
});

router.post("/login", async (req, res) => {
  const user = users.find((item) => item.userId == req.body.userId);
  console.log(user);
  if (user) {
    res.cookie("user", user.nick);
    res.cookie("userId", user.id);
  }
  res.redirect("/");
});

router.post("/logout", (req, res) => {
  res.cookie("user", null, { maxAge: 0 });
  res.cookie("userId", null, { maxAge: 0 });
  res.redirect("/");
});

module.exports = router;
