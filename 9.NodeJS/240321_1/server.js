const net = require("net");
const req = require("./req");
const res = require("./res");

const html = `<html>
  <head>
    <meta charset="UTF-8" />
    <title>Post 실험체</title>
  </head>
  <body>
    <form action="/test" method="post">
      <input type="text" name="id" />
      <input type="text" name="pw" />
      <button>보내기~</button>
    </form>
    <button id="get">받아오기</button>
    <script>
      const test = async () => {
        const data = JSON.parse(await(await fetch('/get')).text());
        console.log(data);
      }
      document.getElementById('get').onclick = test;
    </script>
  </body>
</html>`;

const users = [];

const server = net.createServer((client) => {
  client.on("data", (data) => {
    // client.setEncoding("utf8");
    const tempReq = req.makeReq(data);
    console.log(tempReq);
    // data를 우리가 보기 편한 걸로 바꿔줘야한다. => 객체 -> request -> req
    // 우리가 보내주는 것은 String -> response -> res
    if (tempReq.path == "/") {
      client.write(res.makeResponse("text/html", html));
    } else if (tempReq.path == "/test") {
      users.push(tempReq.body);
      client.write(res.makeResponse("text/html", html));
    } else if (tempReq.path == "/get") {
      //   client.write(res.makeResponse("text/text", users.toString()));
      client.write(res.makeResponse("text/text", JSON.stringify(users)));
    }
    client.end();
  });
  //   client.on('error')
});

server.on("error", (err) => {
  console.log("err : " + err);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("open server");
});
