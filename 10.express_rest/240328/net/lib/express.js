const net = require("net");
const path = require("path");
const fs = require("fs");

const { makeReq } = require("./req");
const { makeResponse, sendFile } = require("./res");

const createRes = (client) => ({
  end: (data) => {
    client.write(makeResponse("text/html", data));
    client.end();
  },
  sendFile: (_path) => {
    const file = fs.readFileSync(_path);
    let type = "text/" + path.extname(_path).slice(1);
    if (type == "text/js") type = "application/javascript";
    client.write(sendFile(type, file));
    client.end();
  },
});

const app = {
  funcList: [],
  add: (method, path, func) => {
    app.funcList.push({ method, path, func });
  },
  execList: (req, res) => {
    const { method, path } = req.header;
    let isRun = false;
    let isNext = false;
    app.funcList.forEach((item) => {
      if (method != item.method) return;
      if (path != item.path) return;
      if (isRun && !isNext) return;
      isNext = false;
      item.func(req, res, () => {
        isNext = true;
      });
      isRun = true;
    });
    return isRun;
  },
  get: (path, func) => {
    app.add("GET", path, func);
  },
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);
    const res = createRes(client);

    if (!app.execList(req, res)) res.end("error");
  });
});

app.listen = (port, func) => {
  server.listen(port, "127.0.0.1", func);
};

module.exports = () => {
  return app;
};
