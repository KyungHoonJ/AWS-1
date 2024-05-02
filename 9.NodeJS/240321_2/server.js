const express = require("express");
const app = express();

app.use(express.static("./"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/test", (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(3001, () => {
  console.log("express server open");
});
