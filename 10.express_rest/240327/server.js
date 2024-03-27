const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.url); // path
  console.log(req.path);
  console.log(req.query); // Querystring
  console.log(req.body);
  console.log(req.protocol);
  res.end("now testing express server");
});

app.get("/test", (req, res) => {
  res.end("now testing express server");
});

app.listen(3000, () => {
  console.log("express server open of 3000 port");
});

//-------------------------

// const express = require("express");
// // const http = require("http");

// const app = express(); // net.createServer() << ??
// // const server = http.createServer((req, res) => {
// //     res.end("now testing http createServer");
// //   });

// app.get("/", (req, res) => {
//   res.end("now testing express server");
// });

// app.listen(3000, () => {
//   console.log("express server open of 3000 port");
// }); // server.listen(port, ip, callbackFn) << ??
// // server.listen(3080, () => {
// //   console.log("http server open of 3080 port");
// // });
