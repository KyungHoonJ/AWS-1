const router = require("express").Router();
const { User } = require('../../models')

router.post('/regist', async(req, res)=>{
    await User.create(req.body)
    res.redirect('/');
})

router.post('/login', async(req, res)=>{
    const user = await User.findOne({
        where:req.body
    })
    if(user) {
        res.cookie('user', user.nick)
        res.cookie('userId', user.id)
    }
    res.redirect('/');
})

router.post('/logout', (req, res)=>{
    res.cookie('user', null, {maxAge:0})
    res.cookie('userId', null, {maxAge:0})
    res.redirect('/');
})


module.exports = router;
