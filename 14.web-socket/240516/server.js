import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: ["http://127.0.0.1:5501", "http://127.0.0.1:8080"] },
}); // url의 host
// You are trying to attach socket.io to an express request handler function. Please pass a http.Server instance.
// path(router) => socket : namespace
// queryString || cookie || variable(React) => socket : room

app.use(express.static("public"));
// io.use(cors());

const chat = io.of("chat");
// app.use('/chat', chat);
const room = io.of("room");
chat.on("connection", (client) => {
  console.log("connected chat");
  client.on("disconnect", () => {
    console.log("client disconnect");
  });

  console.log(client.rooms);
  console.log(client.id);

  client.on("chat", (data) => {
    let now = [...client.rooms][1];
    if (data.room !== now) {
      client.leave(now);
      client.join(data.room);
      now = data.room;
      client.emit("chat", { name: data.room, chat: "에 입장했습니다." });
      client.broadcast
        .to(now)
        .emit("chat", { name: data.name, chat: "가 입장했습니다." });
    }
    chat.to(now).emit("chat", data);
    client.emit("chat", { name: "나", chat: "채팅을 쳤다" });
    // io.to(); // 개인 룸에 보낼 수 있음, 개인 룸은 개인 ID를 기반으로 함
  });
});

// app.get('/', (req, res)=>{}) ==
io.on("connection", (client) => {
  console.log("client connected");

  client.on("disconnect", () => {
    console.log("client disconnect");
  });

  client.on("chat", (data) => {
    console.log(data);
    io.emit("chat", data);
  });
});

app.set("io", io);

server.listen(8080, () => {
  console.log(8080, "server open");
});
