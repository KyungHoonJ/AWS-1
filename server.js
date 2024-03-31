const net = require("net");
const fs = require("fs");

const makeReq = require("./lib/req").makeReq;
const { makeResponse, redirect, sendFile } = require("./lib/res");
const static = require("./lib/static");

const boards = [];
let count = 1;

const getMessage = ({ header: { method, path }, body }) => {
  let message = "";

  if (method == "GET") {
    if (static[path] != undefined) {
      const body = fs.readFileSync(static[path]);
      if (static[path].indexOf(".js") > 0) {
        message = makeResponse("text/javascript", body.toString());
      } else if (static[path].indexOf(".css") > 0) {
        message = makeResponse("text/css", body.toString());
      } else if (static[path].indexOf(".png") > 0) {
        message = sendFile("image/png", body);
      } else if (static[path].indexOf(".jpg") > 0) {
        message = sendFile("image/jpeg", body);
      } else if (static[path].indexOf(".svg") > 0) {
        message = sendFile("image/svg", body);
      } else if (static[path].indexOf(".mp4") > 0) {
        message = sendFile("video/mp4", body);
      } else {
        message = makeResponse("text/html", body.toString());
      }
    }
  } else if (method == "POST") {
    if (path == "/") {
      const { page, count } = body;
      message = makeResponse(
        "application/json",
        JSON.stringify(
          boards
            .slice((page - 1) * count, page * count)
            .map(({ id, title, writer, createdAt }) => ({
              id,
              title,
              writer,
              createdAt,
            }))
        )
      );
    } else if (path == "/write") {
      console.log(body);
      const date = new Date();
      boards.push({
        id: count++,
        ...body,
        createdAt: `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`,
        view: 0,
        like: 0,
      });
      message = redirect("/");
    } else if (path == "/board") {
      const { id } = body;
      const board = boards.find((item) => {
        return item.id == id;
      });

      message = makeResponse(
        "application/json",
        JSON.stringify({
          id: board.id,
          title: board.title,
          writer: board.writer,
          createdAt: board.createdAt,
          text: board.text,
        })
      );
    }
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
