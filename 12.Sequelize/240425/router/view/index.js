const router = require("express").Router();
const {Todo} = require('../../models')

router.use((req, res, next)=>{
  res.data = { user: null, regist: false, list: [] };
  next();
})

router.get("/", async (req, res) => {
  res.data.user = req.cookies.user;

  if(req.cookies.userId){
    res.data.list = await Todo.findAll();
  }

  res.render("index", res.data);
});

router.get("/regist", (req, res) => {
  res.data.regist = true;
  res.render("index", res.data);
});

module.exports = router;
