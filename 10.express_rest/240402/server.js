const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const router = require("./router");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 3000);

// app.use(morgan('dev')); morgan('dev') == 함수?
// console.log(morgan("dev").toString());
// console.log(morgan.toString());
app.use((req, res, next) => {
  if (process.env.NODE_ENV == "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", express.static("public"));

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log("open server", app.get("port"));
});
