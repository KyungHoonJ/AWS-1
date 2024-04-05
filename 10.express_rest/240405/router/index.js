const router = require("express").Router();

const cookieTest = require("./cookie_test");
router.use(cookieTest);

module.exports = router;
