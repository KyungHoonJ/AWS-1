const express = require("./lib/express");
const app = express();

app.get("/", (req, res) => {
  res.end("now testing express server");
});

app.get("/test", (req, res) => {
  res.end("now testing express server");
});

app.get("/test1", (req, res) => {
  res.end("now testing express server");
});

app.listen(3001, () => {
  console.log("express server open of 3000 port");
});
