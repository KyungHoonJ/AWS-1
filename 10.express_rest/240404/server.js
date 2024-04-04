const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use("/imgs", express.static("uploads"));

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      console.log(1, file);
      callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
      console.log(2, file);
      const tempName = Date.now() + "_" + file.originalname;
      imgs.push(tempName);
      callback(null, tempName);
    },
  }),
});

const imgs = [];

app.use("/write", (req, res, next) => {
  if (req.headers.cookie) {
    req.user = req.headers.cookie;
  }
  console.log(imgs);
  next();
});

// post(path:String, ...callback:Array(function))
app.post("/write", upload.array("img"), (req, res) => {
  if (req.user) {
    //   console.log(req.cookies);
    //   // 1712192472453_dsfarevsr.png
    console.log(req.headers);
    console.log(req.body);
    console.log(req.file);
    console.log(req.files);
    // res.cookie("file", req.file.filename);
  }
  res.redirect("/");
});

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} server open`);
});
