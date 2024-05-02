const router = require("express").Router();
const board = require("./board");

router.use("/board", board);

module.exports = router;

// app.post('/board/comment', (req, res)=>{})
// app.post('/board/comment/write', (req, res)=>{})
// app.post('/board/comment/update', (req, res)=>{})
// app.post('/board/comment/delete', (req, res)=>{})
