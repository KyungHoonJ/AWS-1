const net = require("net");
const fs = require("fs");

const { makeReq } = require("./lib/req");
const { makeResponse, redirect, sendFile } = require("./lib/res");
const static = require("./lib/static");

const users = [];

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
      } else {
        message = makeResponse("text/html", body.toString());
      }
    }
  } else if (method == "POST") {
    if (path == "/") {
      // http://localhost:3000/ POST
      // POST / HTTP/1.1
      message = makeResponse(
        "application/json",
        JSON.stringify(
          //   users.map((item, idx) => {
          //     return { id: item.id, idx };
          //   })
          users.map((item, idx) => ({ id: item.id, idx }))
        )
      );
    } else if (path == "/write") {
      users.push(body);
      message = redirect();
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
