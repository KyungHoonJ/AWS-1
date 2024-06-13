import express, { Express } from "express";
import path from "path";

const app: Express = express();
app.set("port", 3000);

app.use(express.static(path.join(__dirname, "public")));

// app.post

app.listen(app.get("port"), (): void => {
  console.log(app.get("port"), "server open");
});
