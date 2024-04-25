const router = require("express").Router();

const header = {
  topList: [
    {
      img: "talk",
      name: "톡피지지",
      class: "main",
    },
    {
      img: "lol",
      name: "리그오브레전드",
    },
    {
      img: "dskapp",
      name: "데스크톱",
    },
    {
      img: "tft",
      name: "전략적 팀 전투",
    },
    {
      img: "val",
      name: "발로란트",
    },
    {
      img: "pubg",
      name: "배틀그라운드",
    },
    {
      img: "pal",
      name: "팰월드",
    },
    {
      img: "overwatch",
      name: "오버워치2",
    },
    {
      img: "gigs",
      name: "Gigs",
    },
    {
      img: "duo",
      name: "Duo",
    },
    {
      img: "esports",
      name: "이스포츠",
    },
  ],
  subList: [
    { name: "리그오브레전드" },
    { name: "유저 찾기" },
    { name: "양성소" },
    { name: "잡담소" },
    { name: "배틀그라운드" },
    { name: "오버워치" },
  ],
};

const category = [
  { href: "/free", name: "자유", default: false },
  { href: "/humor", name: "유머", default: false },
  { href: "/qna", name: "질문", default: false },
  { href: "/videos", name: "영상", default: false },
  { href: "/issues", name: "사건 사고", default: false },
  { href: "/match-history", name: "전적 인증", default: false },
  { href: "/fan-art", name: "팬 아트", default: false },
];

const list = [
  {
    id: 1,
    user_nick: "무덤지기",
    title: "암살자 벨런스",
    category: { href: "/free", name: "자유", default: false },
    created_at: 1714069055335,
    recomment: 0,
    content: `헬로?
<br/>
    이건 테스트야`,
  },
  {
    id: 2,
    user_nick: "무덤지기",
    title: "암살자 벨런스",
    category: { href: "/free", name: "자유", default: false },
    created_at: 1714069055335,
    recomment: 0,
    content: "sadfsadfsadf",
  },
];

router.get("/write", (req, res) => {
  res.render("write");
});

router.get("/", (req, res) => {
  const body = {
    menu: { category },
    top: { category },
    list: { list },
    item: undefined,
  };
  const temp = category.find((item) => item.default);
  if (temp) temp.default = false;
  res.render("index", {
    title: "전체 게시판",
    header,
    body,
  });
});

router.get("/:cate", (req, res) => {
  const body = {
    menu: { category },
    top: { category },
    list: { list },
    item: undefined,
  };
  const temp = category.find((item) => item.default);
  if (temp) temp.default = false;
  const cateItem = category.find((item) => item.href == "/" + req.params.cate);
  cateItem.default = true;
  res.render("index", {
    title: cateItem.name + "게시판",
    header,
    body,
  });
});

router.get("/:cate/:id", (req, res) => {
  const item = list[req.params.id - 1];
  console.log(item);
  const body = {
    menu: { category },
    top: undefined,
    list: undefined,
    item,
  };
  const temp = category.find((item) => item.default);
  if (temp) temp.default = false;
  const cateItem = category.find((item) => item.href == "/" + req.params.cate);
  cateItem.default = true;
  res.render("index", {
    title: cateItem.name + "게시판",
    header,
    body,
  });
});

router.post("/:cate/:id/recomment/:like", (req, res) => {
  const item = list[req.params.id - 1];
  item.recomment += +req.params.like;
  console.log(item);
  res.redirect(`/${req.params.cate}/${req.params.id}`);
});

router.post("/write", (req, res) => {
  if (req.user.nick) {
    list.push({
      ...req.body,
      id: list[list.length - 1].id + 1,
      category: { href: "/free", name: "자유", default: false },
      user_nick: req.user.nick,
      created_at: Date.now(),
      recomment: 0,
    });
  }
  res.redirect("/");
});

module.exports = router;
