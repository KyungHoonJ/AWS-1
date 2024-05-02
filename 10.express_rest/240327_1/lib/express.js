const net = require("net");

const { makeReq } = require("./req");
const { makeResponse } = require("./res");

const createRes = (client) => ({
  end: (data) => {
    client.write(makeResponse("text/html", data));
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
    app.funcList.forEach((item) => {
      if (method != item.method) return;
      if (path != item.path) return;
      item.func(req, res);
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
