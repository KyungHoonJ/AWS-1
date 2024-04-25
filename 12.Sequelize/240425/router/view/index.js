const router = require("express").Router();
const {Todo, sequelize, Sequelize} = require('../../models')

router.use((req, res, next)=>{
  res.data = { user: null, regist: false, list: [] };
  next();
})

router.get("/", async (req, res) => {
  res.data.user = req.cookies.user;

  if(req.cookies.userId){
    res.data.list = await Todo.findAll({
      attributes:['content', 'id',
        [sequelize.fn('count', Sequelize.col('Todos.id')), 'todoCnt']
      ],
      where:{
        todoId: null
      },
      include:[{
        model: Todo,
        attributes:[],
      }],

      group:[Sequelize.col('Todo.id')]
    });
    if(res.data.list.length){
      console.log(JSON.parse(JSON.stringify(res.data.list[0])))
      console.log(res.data.list[0].todoCnt)
    }
  }

  res.render("index", res.data);
});

router.get("/regist", (req, res) => {
  res.data.regist = true;
  res.render("index", res.data);
});

module.exports = router;
