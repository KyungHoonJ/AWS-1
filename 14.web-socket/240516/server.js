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
chat.on("connection", (client) => {
  console.log("connected chat");
  // chat.js 파일 내에서 get, post
  client.on("disconnect", () => {
    console.log("client disconnect");
  });

  console.log(client.rooms);
  // Set(1) { 'TllJgx-jMjkGUK4RAAAD' }
  // const temp = new Set();
  // console.log(temp);
  // temp.add(2);
  // console.log(temp);
  // temp.add(1);
  // console.log(temp);
  // temp.add("1");
  // console.log(temp);
  // console.log(new Set([1, 2, 3, 1, 2, 3, 1, 2, 3]));
  // const tempObj = { a: 1 };
  // console.log(
  //   new Set([tempObj, tempObj, tempObj, tempObj, tempObj, tempObj, tempObj])
  // );
  // client.rooms.clear();
  // client.join(1);
  // console.log(client.rooms);

  client.on("chat", (data) => {
    let now = [...client.rooms][0];
    if (data.room !== now) {
      client.rooms.clear();
      client.join(data.room);
      now = data.room;
    }
    console.log(data);
    chat.to(now).emit("chat", data);
    // chat.to(2).emit("chat", data);
    // client.leave(1);
    // iterator
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

server.listen(8080, () => {
  console.log(8080, "server open");
});
