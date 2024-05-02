const router = require("express").Router();
const {Todo} = require('../../models')

router.post('/add', async (req, res)=>{
    if(req.body.todoId == "")req.body.todoId = undefined
    await Todo.create({...req.body, userId: req.cookies.userId})
    res.redirect('/')
})

module.exports = router;
