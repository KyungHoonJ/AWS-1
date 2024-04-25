const router = require("express").Router();

router.use('/user', require('./user'))
router.use('/todo', require('./todo'))

module.exports = router;
