const net = require("net");
// 모듈 net을 받아온다.
//   net을 실행하고 그 결과를 net 상수에 할당한다.
const fs = require("fs");
// fs(File System)을 실행하고 그 결과를 fs 상수에 할당한다.

// const { makeReq } = require("./lib/req");
const makeReq = require("./lib/req").makeReq;
// 1. ./(현재 경로)의 lib 폴더 안에 req 파일을 가져다 실행한다.
// 2. 그 결과를 반환 받는다.
// 3. 반환 받은 결과를 구조분해할당을 통해서 makeReq만을 할당한다.
const { makeResponse, redirect, sendFile } = require("./lib/res");
const static = require("./lib/static");

const users = [
  // 0 <= index < 4 // page = 1
  // 4 <= index < 8 // page = 2
  // (page - 1) * 4 <= index < page * 4
  { id: "test1", pw: "test1", name: "test1" }, // 1번째 페이지 0
  { id: "test2", pw: "test2", name: "test2" }, // 1번째 페이지 1
  { id: "test3", pw: "test3", name: "test3" }, // 1번째 페이지 2
  { id: "test4", pw: "test4", name: "test4" }, // 1번째 페이지 3

  { id: "test5", pw: "test5", name: "test5" }, // 2번째 페이지 4
  { id: "test6", pw: "test6", name: "test6" }, // 2번째 페이지 5
  { id: "test7", pw: "test7", name: "test7" }, // 2번째 페이지 6
  { id: "test8", pw: "test8", name: "test8" }, // 2번째 페이지 7

  { id: "test9", pw: "test9", name: "test9" }, // 3번째 페이지
  { id: "test10", pw: "test10", name: "test10" }, // 3번째 페이지
  { id: "test11", pw: "test11", name: "test11" }, // 3번째 페이지
  { id: "test12", pw: "test12", name: "test12" }, // 3번째 페이지

  { id: "test13", pw: "test13", name: "test13" }, // 4번째 페이지
  { id: "test14", pw: "test14", name: "test14" }, // 4번째 페이지
  { id: "test15", pw: "test15", name: "test15" }, // 4번째 페이지
  { id: "test16", pw: "test16", name: "test16" }, // 4번째 페이지

  { id: "test17", pw: "test17", name: "test17" }, // 5번째 페이지
];

const boards = [
  {
    id: 1,
    title: "토요일 보충 수업",
    createdAt: "2024-03-30",
    text: "오늘 점심 뭐먹지?",
    like: 0,
    view: 0,
  },
  {
    id: 2,
    title: "토요일 보충 수업2",
    createdAt: "2024-03-30",
    text: "오늘 점심 뭐먹지?2",
    like: 0,
    view: 1,
  },
];

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
      // body.page, count
      const { page, count } = body; // 구조분해할당
      // {
      console.log(body);
      const tempArr = [];
      for (
        let i = (page - 1) * count;
        i < page * count && i < boards.length;
        ++i
      ) {
        // if (i == boards.length) break;
        const tempObj = {
          id: boards[i].id,
          title: boards[i].title,
          createdAt: boards[i].createdAt,
        };
        tempArr.push(tempObj);
      }
      message = makeResponse("application/json", JSON.stringify(tempArr));
      // } == {
      message = makeResponse(
        "application/json",
        JSON.stringify(
          boards
            .slice((page - 1) * count, page * count)
            .map(({ id, title, createdAt }) => ({ id, title, createdAt }))
        )
      );
      // }
    } else if (path == "/write") {
      // '2024-03-30'
      boards.push({ ...body, createdAt: new Date() });
      message = makeResponse("text/text", "?");
    } else if (path == "/board") {
      const { id } = body; // 구조분해할당
      const board = boards.find((item) => {
        return item.id == id;
      });

      // console.log(board);
      message = makeResponse(
        "application/json",
        JSON.stringify({ id: board.id, title: board.title, text: board.text })
      );
    }
    // if (path == "/") {
    //   // console.log(body.page);
    //   // http://localhost:3000/ POST
    //   // POST / HTTP/1.1
    //   message = makeResponse(
    //     "application/json",
    //     JSON.stringify(
    //       //   users.map((item, idx) => {
    //       //     return { id: item.id, idx };
    //       //   })
    //       users
    //         .slice((body.page - 1) * body.count, body.page * body.count)
    //         .map((item, idx) => ({ id: item.id, idx }))
    //     )
    //   );
    // } else if (path == "/write") {
    //   users.push(body);
    //   message = redirect();
    // }
  }

  return message;
};

const server = net.createServer((client) => {
  client.on("data", (data) => {
    const req = makeReq(data);

    client.write(getMessage(req));
    // client.end();
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open of 3000 port");
});
