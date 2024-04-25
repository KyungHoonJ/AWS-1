const router = require("express").Router();

router.use((req, res, next)=>{
  res.data = { user: null, regist: false, list: [] };
  next();
})

router.get("/", (req, res) => {
  console.log(req.params.id)
  res.data.user = req.cookies.user;
  res.render("index", res.data);
});

router.get("/regist", (req, res) => {
  res.data.regist = true;
  res.render("index", res.data);
});

module.exports = router;
