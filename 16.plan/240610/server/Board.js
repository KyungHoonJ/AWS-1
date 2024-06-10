const MyRouter = require("./MyRouter");

class Board extends MyRouter {
  constructor(path) {
    super(path);
  }

  init(app) {
    super.init(app);

    this.router.get("/create", (req, res) => {});
    this.router.get("/list", (req, res) => {});
    this.router.get("/item", (req, res) => {});
  }
}

module.exports = Board;
