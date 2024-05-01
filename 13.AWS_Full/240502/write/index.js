const categoryList = [
  { name: "전체", href: "./" },
  {
    name: "정보",
    href: "./",
    categorys: [
      {
        name: "OP.GG 기획",
        href: "./",
      },
      { name: "유저 뉴스", href: "./", isWrite: true },
      { name: "팁과 노하우", href: "./", isWrite: true },
      { name: "패치노트", href: "./" },
    ],
  },
  {
    name: "커뮤니티",
    href: "./",
    categorys: [
      { name: "자유", href: "./", isWrite: true },
      { name: "유머", href: "./", isWrite: true },
      { name: "질문", href: "./", isWrite: true },
      { name: "영상", href: "./", isWrite: true },
      { name: "사건 사고", href: "./", isWrite: true },
      { name: "전적 인증", href: "./", isWrite: true },
      { name: "팬 아트", href: "./", isWrite: true },
    ],
  },
  {
    name: "e스포츠",
    href: "./",
    categorys: [
      { name: "LCK", href: "./", isWrite: true },
      { name: "기타 리그", href: "./", isWrite: true },
    ],
  },
];

const cateElem = document.getElementById("category-list");

categoryList.forEach((cate1) => {
  let str = "";
  if (cate1.categorys) {
    str += `
    <li>
      <a href="${cate1.href}">
        <h4>${cate1.name}<span>&gt</span></h4>
      </a>
      <ul>`;
    cate1.categorys.forEach((cate2) => {
      str += `
        <li>
          <a href="${cate2.href}"><span>${cate2.name}</span></a>
        </li>`;
    });
    str += `
      </ul>
    </li>`;
  } else {
    str += `
    <li>
      <a href="${cate1.href}"><h4>${cate1.name}</h4></a>
    </li>`;
  }
  cateElem.innerHTML += str;
});

const linkList = [
  { name: "유저 찾기", href: "./", img: "../imgs/icon-community-lfg.png" },
  { name: "양성소", href: "./", img: "../imgs/icon-community-subculture.png" },
  { name: "잡담소", href: "./", img: "../imgs/icon-community-talk.png" },
];

const linkListElem = document.getElementById("link-list");

linkList.forEach((link) => {
  linkListElem.innerHTML += `
  <li>
    <a href="${link.href}">
      <div class="link-item">
        <div class="img-box">
          <img src="${link.img}" alt="" />
        </div>
        <span>${link.name}</span>
      </div>
    </a>
  </li>`;
});

const listElem = document.getElementById("list");

for (let i = 0; i < 40; i++)
  listElem.innerHTML += `<li>
<a href="./">
  <div class="item">
    <div class="like">
      <p>▲</p>
      <p>123</p>
    </div>
    <div class="text">
      <h4>단톡방 자아분열 <span>[32]</span></h4>
      <p>유머 | 2시간 전 | 더레이더</p>
    </div>
    <div class="img">
      <img src="../imgs/bg_lol.jpg" alt="" />
    </div>
  </div>
</a>
</li>`;
