const express = require("express");
const MyRouter = require("./MyRouter");

const app = express();

const user = new MyRouter("/user");
user.init(app);
user.setCallbacks({
  login: (req, res) => {
    res.send("login");
  },
  logout: (req, res) => {
    res.send("logout");
  },
  regist: (req, res) => {
    res.send("regist");
  },
});

const board = new MyRouter("/board");
board.init(app);
board.setCallbacks({
  create: (req, res) => {
    res.send("login");
  },
  list: (req, res) => {
    res.send("logout");
  },
  item: (req, res) => {
    res.send("regist");
  },
});

// app.use('/api', router)

app.listen(3000, () => {
  console.log(3000, "server open");
});
