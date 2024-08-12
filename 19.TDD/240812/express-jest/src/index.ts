import { config } from "dotenv";

import app from "./app";

config();

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "server open");
});
