const net = require("net");
const { makeReq } = require("./lib/req");
const { makeResponse } = require("./lib/res");

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);
    console.log(req);

    client.write(makeResponse("text/html", "<h1>Hello</h1>"));
    client.end();
  });
});

server.on("error", (err) => {
  console.log(err);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open of 3000 port");
});
