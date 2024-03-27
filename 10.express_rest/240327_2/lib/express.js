console.log(
  "2. require() 함수를 사용해서 lib 폴더의 express.js를 실행하고 결과를 가져가기"
);
const net = require("net");
console.log("3. net 모듈 가져오기");

console.log(
  "4. require 함수로 같은 lib 폴더의 req.js 파일의 makeReq 메서드를 가져오기"
);
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
  console.log("100. data 이벤트 발생 시 처리하는 코드를 추가");
  client.on("data", (data) => {
    console.log("101. 11111");
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
