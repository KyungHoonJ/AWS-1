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
      { name: "유저 뉴스", href: "./" },
      { name: "팁과 노하우", href: "./" },
      { name: "패치노트", href: "./" },
    ],
  },
  {
    name: "커뮤니티",
    href: "./",
    categorys: [
      { name: "자유", href: "./" },
      { name: "유머", href: "./" },
      { name: "질문", href: "./" },
      { name: "영상", href: "./" },
      { name: "사건 사고", href: "./" },
      { name: "전적 인증", href: "./" },
      { name: "팬 아트", href: "./" },
    ],
  },
  {
    name: "e스포츠",
    href: "./",
    categorys: [
      { name: "LCK", href: "./" },
      { name: "기타 리그", href: "./" },
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

const tempArr = [...categoryList];
const cateSeleElem = document.getElementById("category");

for (let i = 0; i < tempArr.length; ++i) {
  cateSeleElem.innerHTML += `<option value="${tempArr[i].href}">${tempArr[i].name}</option>`;
  if (tempArr[i].categorys) tempArr.push(...tempArr[i].categorys);
}

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
      <img src="./imgs/bg_lol.jpg" alt="" />
    </div>
  </div>
</a>
</li>`;
