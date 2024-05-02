console.log("1. node server로 서버 실행");
const express = require("./lib/express");
const app = express();

app.get("/", (req, res) => {
  res.end("now testing express server");
});

app.get("/test", (req, res) => {
  res.end("now testing express server");
});

app.get("/test1", (req, res) => {
  res.end("now testing express server");
});

app.listen(3002, () => {
  console.log("express server open of 3000 port");
});
