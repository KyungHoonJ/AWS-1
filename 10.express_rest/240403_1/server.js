const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();

const router = require("./router");

const app = express();

app.set("port", process.env.PORT);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "template"));

app.use(router);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
