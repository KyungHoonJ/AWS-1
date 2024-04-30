const category = [
  { name: "전체", img: "" },
  {
    name: "정보",
    img: "",
    categorys: [
      { name: "OP.GG 기획", img: "" },
      { name: "유저 뉴스", img: "" },
      { name: "팁과 노하우", img: "" },
      { name: "패치노트", img: "" },
    ],
  },
  {
    name: "커뮤니티",
    img: "",
    categorys: [
      { name: "자유", img: "" },
      { name: "유머", img: "" },
      { name: "질문", img: "" },
      { name: "영상", img: "" },
      { name: "사건 사고", img: "" },
      { name: "전적 인증", img: "" },
      { name: "팬 아트", img: "" },
    ],
  },
  {
    name: "e스포츠",
    img: "",
    categorys: [
      { name: "LCK", img: "" },
      { name: "기타 리그", img: "" },
    ],
  },
  {
    name: "",
    img: "",
    categorys: [
      { name: "유저 찾기", img: "" },
      { name: "양성소", img: "" },
      { name: "잡담소", img: "" },
    ],
  },
];

const cateElem = document.getElementById("category-list");

category.forEach((cate1) => {
  let str = "";
  if (cate1.name && cate1.categorys) {
    str += `<li>
    <a href="#">
      <h4>${cate1.name}<span>&gt</span></h4>
    </a>
    <ul>`;
    cate1.categorys.forEach((cate2) => {
      str += `<li>
  <a href="#">
    <span>${cate2.name}</span>
  </a>
</li>`;
    });
    str += `</ul>
</li>`;
  } else if (cate1.categorys) {
    str += `<li><ul>`;
    cate1.categorys.forEach((cate2) => {
      str += `<li>
    <a href="#">
      <span>${cate2.name}</span>
    </a>
  </li>`;
    });
    str += `</ul></li>`;
  } else {
    str += `<li>
  <a href="#"><h4>${cate1.name}</h4></a>
</li>`;
  }
  cateElem.innerHTML += str;
});

const boardListElem = document.getElementById("list");

for (let i = 0; i < 40; i++) {
  boardListElem.innerHTML += `<li>
<a href="">
  <div>
    <div class="like">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="#7b858e"
        xmlns="http://www.w3.org/2000/svg"
        class="up css-1lmc62g ezhzapu0 animate"
        data-type="default"
      >
        <path
          d="M12.8215 10.4987L8.55564 4.31749C8.48688 4.21791 8.40159 4.13798 8.30561 4.08318C8.20963 4.02837 8.10524 4 7.9996 4C7.89396 4 7.78957 4.02837 7.69359 4.08318C7.59761 4.13798 7.51231 4.21791 7.44355 4.31749L3.17768 10.4987C2.77056 11.0887 3.1081 12 3.73373 12H12.2667C12.8923 12 13.2299 11.0887 12.8215 10.4987Z"
        ></path>
      </svg>
      <span>123</span>
    </div>
    <div class="text">
      <p class="title">
        남자들 바지 주머니 특징
        <span class="comment">[32]</span>
      </p>
      <p class="info">
        <span>유머</span> | <span>9시간 전</span> |
        <span>깡패토끼</span>
      </p>
    </div>
    <img src="../imgs/bg_lol.jpg" alt="" />
  </div>
</a>
</li>`;
}
