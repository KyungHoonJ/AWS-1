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
    res.cookie('user', user?.nick)
    res.redirect('/');
})

router.post('/logout', async(req, res)=>{
    res.cookie('user', null, {maxAge:0})
    res.redirect('/');
})


module.exports = router;
