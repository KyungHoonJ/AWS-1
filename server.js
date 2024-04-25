const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const router = require("./router");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cookieParser("cookie_secret"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "public");

app.use(express.static("public"));
app.use(router);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
