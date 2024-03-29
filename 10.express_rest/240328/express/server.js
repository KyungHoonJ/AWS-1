const express = require("express");
const path = require("path");

const app = express();

const boardRoot = path.join(__dirname, "..", "board");

// Middleware

app.use((req, res, next) => {
  // get, post, put, patch, delete << Rest API의 method 모두 대응
  console.log("middleware");
  // res.send("이건 어차피 한글 됨"); // << express에서는 이렇게 쓰지 말라고 한다.
  next();
});

app.get("/board", (req, res, next) => {
  console.log("board middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("이건 어차피 한글 됨");
});

app.get("/board", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.html"));
});

app.get("/board.css", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.css"));
});

app.get("/board.js", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.js"));
});

app.use("/test", (req, res, next) => {
  req.test = {};
  next();
});

app.use("/test", (req, res, next) => {
  req.test.a = 1;
  next();
});

app.use("/test", (req, res, next) => {
  req.test.b = "테스트중";
  next();
});

app.post("/test", (req, res) => {
  res.json(req.test);
});

app.all("/*", (req, res) => {
  res.send("구현 사항 없음");
}); // use랑 같은 놈 << send, sendFile 등 데이터를 응답하기 위해 사용한다.

app.listen(3000, () => {
  console.log("express server open of 3000 port");
});
