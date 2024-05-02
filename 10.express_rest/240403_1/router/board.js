const router = require("express").Router();

const categories = [
  { name: "수업", href: "/class" },
  { name: "수료자 후기", href: "/finish" },
];

router.get("/", (req, res) => {
  res.render("root", {
    title: "게시판",
    header: {
      categories,
    },
    container: "board/list",
  });
});

router.get("/write", (req, res) => {
  res.render("root", {
    title: "글쓰기",
    header: {
      categories,
    },
    container: "board/write",
  });
});

module.exports = router;
