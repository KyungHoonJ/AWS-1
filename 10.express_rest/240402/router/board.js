const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const boards = [
  { id: 1, title: "오늘의 점심은?", writer: "손민복", createdAt: "2024-04-02" },
  { id: 2, title: "오늘의 점심은?", writer: "이승배", createdAt: "2024-04-02" },
  { id: 3, title: "오늘의 점심은?", writer: "방지완", createdAt: "2024-04-02" },
  { id: 4, title: "오늘의 점심은?", writer: "김강문", createdAt: "2024-04-02" },
  { id: 5, title: "오늘의 점심은?", writer: "이동찬", createdAt: "2024-04-02" },
];

router.get("/", (req, res) => {
  const boardHtmlPath = path.join(__dirname, "..", "views", "board.html");
  const html = fs.readFileSync(boardHtmlPath, { encoding: "utf8" });

  const boardTemplatePath = path.join(
    __dirname,
    "..",
    "views",
    "boardItemTemplate.html"
  );
  const boardTemplate = fs.readFileSync(boardTemplatePath, {
    encoding: "utf8",
  });

  let tempStr = ``;
  const objNames = ["id", "title", "writer", "createdAt", "view"];
  // const names = Object.keys(boards[0]) << 알아서 찾아볼것

  boards.forEach((item) => {
    let itemStr = boardTemplate;
    objNames.forEach((name) => {
      itemStr = itemStr.replaceAll(`{{${name}}}`, item[name]);
    });
    tempStr += itemStr;
  });

  tempStr = html.replace("{{list}}", tempStr);
  res.send(tempStr);
});

router.post("/", (req, res) => {
  console.log("board 정보 필요");
  res.redirect("/");
});

router.post("/like", (req, res) => {
  console.log(req.body.like);
  res.redirect("/");
});

module.exports = router;

// app.post('/board', (req, res)=>{})
// app.post('/board/write', (req, res)=>{})
// app.post('/board/update', (req, res)=>{})
// app.post('/board/delete', (req, res)=>{})
