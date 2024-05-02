const express = require("express");

const app = express();

app.use(express.static("views"));

app.listen(3000, () => {
  console.log("server open of 3000 port");
});
// npm start
