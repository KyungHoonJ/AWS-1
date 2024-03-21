const net = require("net");

// TCP Socket 서버
// 다음주 월요일까지 하는 건 TCP Socket 서버를 사용해서
// HTTP를 구현할거다.
// TCP -> OSI 7 계층에서의 4계층(TCP VS UDP)
// HTTP -> OSI 7 계층에서의 7계층
// 5계층에 Session 계층, 연결을 유지하는 계층
// 연결이 끊어졌을 때

const body = `<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <div>잘받았다</div>
</body>
</html>`;

const response = `HTTP/1.1 200 Ok
Content-Type: text/html
Content-Length: ${body.length}

${body}`;

const server = net.createServer((client) => {
  // 연결 됐으니 데이터 받을 준비가 필요하다.
  client.on("data", (data) => {
    client.setEncoding("utf8");
    console.log(new Date());
    console.log(data);
    console.log(data.toString());
    console.log(data.toString().split("\r\n")[0].split(" "));

    client.write(response);
    client.end();
  });
});

server.on("error", (err) => {
  console.log("err : " + err);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open");
});
