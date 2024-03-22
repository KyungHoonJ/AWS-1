const net = require("net");
const { makeReq } = require("./lib/req");
const { makeResponse, redirect } = require("./lib/res");
const home = require("./views/index");
// const fs = require('fs')
// fs.readFileSync

// const COUNTRY = ["대한민국", "미국", "일본", "중국"];
// const CITY = [
//   ["경기도", "서울", "강원도", "인천"],
//   ["뉴욕", "LA", "텍사스"],
//   ["도쿄", "오카사", "오키나와"],
//   ["후찬성", "상해", "베이징", "사천성"],
// ];

// const user = {
//   id: "",
//   pw: "",
//   name: "",
//   job: "",
//   age: 0,
//   addressStr: "대한민국 경기도 성남시",
//   address: {
//     country: COUNTRY[0],
//     city: CITY[user.country][0],
//     road: "",
//     roadCount: 0,
//     buildName: "",
//     floor: 0,
//     roomCount: 0,
//   },
// };

const users = [];

const getMessage = ({ header: { method, path }, body }) => {
  let message = "";
  if (method == "GET") {
    if (path == "/") message = makeResponse("text/html", home);
    else if (path == "/list")
      message = makeResponse("application/json", JSON.stringify(users));
    else if (path == "/write") message = makeResponse("text/html", "write.js");
  } else if (method == "POST") {
    if (path == "/") {
      users.push(body);
      message = redirect();
    }
  }
  console.log(message);
  return message;
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    console.log(data.toString());
    const req = makeReq(data);
    console.log(req.header);
    console.log(req.body);

    client.write(getMessage(req));
    client.end();
  });
});

server.on("error", (err) => {
  console.log(err);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open of 3000 port");
});
