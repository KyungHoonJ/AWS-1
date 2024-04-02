const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

dotenv.config();

// console.log(process.env["PORT"]);

const app = express();

app.set("port", process.env.PORT || 3000);
// global.port = process.env.PORT;

app.use(morgan("dev"));
// app.use((req, res, next) => {
//   console.log(req.hostname);
//   next();
// });

app.use(express.urlencoded({ extended: false }));
// body parser
// 메서드 호출할 때 객체가 들어간다? << 옵션
// extended : 확장
//   - true | false
//   - true : 외부 라이브러리를 사용하여 작동한다. (qs library)
//   - false : Express가 갖고있는 body parser로 작동한다. (querystring module)
// querystring을 파싱해준다? << form => Content-Type : x-www-form-urlencoded

app.use(express.json());
// Content-Type : application/json

app.use("/", express.static("public"));
// / == public
// /imgs => public/imgs
// /imgs/wa4v34va.png => public/imgs/wa4v34va.png => X
// app.use(express.static("public"));
app.use("/imgs", express.static("uploads"), express.static("uploads1"));
// /imgs == uploads
// /imgs/wa4v34va.png => uploads/wa4v34va.png => O

// /imgs/wa4v34va2.png => uploads/wa4v34va2.png => X => 아래 코드 실행

app.get("/board", (req, res) => {
  console.log("board 폴더는 없다");
  //   console.log(req.hostname);
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json({ a: 1 });
});

app.listen(app.get("port"), () => {
  console.log(app.get("port") + " 포트로 서버를 열었어");
});
