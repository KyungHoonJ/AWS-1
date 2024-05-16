import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: ["http://127.0.0.1:5501", "http://127.0.0.1:8080"] },
});
// You are trying to attach socket.io to an express request handler function. Please pass a http.Server instance.

app.use(express.static("public"));
// io.use(cors());

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
