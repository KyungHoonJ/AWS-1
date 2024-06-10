const MyRouter = require("./MyRouter");

class User extends MyRouter {
  constructor(path) {
    super(path);
  }

  init(app) {
    super.init(app);

    this.router.get("/login", (req, res) => {});
    this.router.get("/regist", (req, res) => {});
    this.router.get("/logout", (req, res) => {});
  }
}

module.exports = User;
