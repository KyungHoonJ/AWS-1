const express = require("express");
const morgan = require("morgan");
const path = require("path");
const multer = require("multer");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const router = require("./router");

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});
const uploadRouter = (name) => multer({ storage }).array(name);

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.post("*/write", uploadRouter("img"));
app.use(router);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "port server open");
});
