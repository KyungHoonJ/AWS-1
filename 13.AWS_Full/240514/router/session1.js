const router = require("express").Router();
const session = require("express-session");
const FileStore = require("session-file-store")(session);
// board-session
router.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "test",
    name: "board-session", // connect.sid
    store: new FileStore({
      reapInterval: 10, // 파일을 10초 뒤에 삭제한다.
      path: "./board-session",
    }),
    cookie: {
      maxAge: 60 * 1000,
    },
  })
);

router.get("/set", (req, res) => {
  req.session.user = 1;
  console.log(req.session.id);
  res.send("setting session");
});

router.get("/get", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  //   if (req.session.user) {
  //     req.session.user = 1;
  //   }
  res.send({ user: req.session.user });
});

module.exports = router;
