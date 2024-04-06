const net = require("net");
const fs = require("fs");

const makeReq = require("./lib/req").makeReq;
const { makeResponse, redirect, setCookie } = require("./lib/res");
const { makeStaticMassage } = require("./lib/static");

const users = [{ id: "asdf", pw: "asdf", name: "asdf11" }];
const catalogue = [
  { name: "공지사항", href: "/notice" },
  { name: "자유게시판", href: "/" },
];
const boards = [
  {
    id: 1,
    title: "test",
    writer: "tester",
    catalogue: "자유게시판",
    createdAt: "2024-04-08",
    text: "테스트중",
  },
];
let count = 2;

const getMessage = ({ header: { method, path, cookie }, body }) => {
  let message = "";

  if (method == "GET") message = makeStaticMassage(path);

  if (method == "POST" && path == "/user/regist") {
    if (body.pw == body.pwr) users.push(body);
    message = redirect("/");
  }
  if (method == "POST" && path == "/user/login") {
    const user = users.find((item) => item.id == body.id);
    if (user.pw == body.pw) setCookie("user", user.name);
    message = redirect("/");
  }
  if (method == "POST" && path == "/user/logout") {
    setCookie("user", 'a; Max-Age=0; Path="/"');
    message = redirect("/");
  }

  if (method == "POST" && path == "/") {
    message = makeResponse(
      "application/json",
      JSON.stringify(boards.filter((item) => item.catalogue == "자유게시판"))
    );
  }
  if (method == "POST" && path == "/notice") {
    message = makeResponse(
      "application/json",
      JSON.stringify(boards.filter((item) => item.catalogue == "공지사항"))
    );
  }
  if (method == "POST" && path == "/catalogue") {
    message = makeResponse("application/json", JSON.stringify(catalogue));
  }
  if (method == "POST" && path == "/write") {
    const date = new Date();
    boards.push({
      ...body,
      id: count++,
      writer: cookie.split(";")[0].split("=")[1],
      createdAt: `${date.getFullYear()}-${date
        .getMonth()
        .toString()
        .padStart(2, "0")}-${date.getDay().toString().padStart(2, "0")}`,
      catalogue: "자유게시판",
    });
    message = redirect("/");
  }
  if (method == "POST" && path == "/board") {
    const { id } = body;
    const board = boards.find((item) => {
      return item.id == id;
    });

    message = makeResponse("application/json", JSON.stringify(board));
  }

  return message;
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);

    client.write(getMessage(req));
    client.end();
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open of 3000 port");
});
