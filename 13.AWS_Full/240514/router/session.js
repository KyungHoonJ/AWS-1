const router = require("express").Router();
// user-session
router.get("/set", (req, res) => {
  req.session.user = 1;
  console.log(req.session.id);
  res.send("setting session");
});

router.get("/get", (req, res) => {
  console.log(req.session);
  //   if (req.session.user) {
  //     req.session.user = 1;
  //   }
  res.send({ user: req.session.user });
});

module.exports = router;
