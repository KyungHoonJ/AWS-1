const userBox = document.forms["user-box"];

const createLogInBox = () => {
  userBox.action += "user/login";
  userBox.classList.add("login");
  userBox.innerHTML = `<div>
  <div>
    <label for="id">ID : </label>
    <input type="text" id="id" name="id" />
  </div>
  <div>
    <label for="pw">PW : </label>
    <input type="password" name="pw" id="pw" />
  </div>
</div>
<button>Log In</button>
<a href="/regist"><button type="button">Regist</button></a>`;
};

const createLogOutBox = () => {
  userBox.action += "user/logout";
  userBox.classList.add("logout");
  userBox.innerHTML = `<h4>${
    document.cookie.split(";")[0].split("=")[1]
  }님 어서오세요</h4>
<button>Log Out</button>`;
};

if (document.cookie == "") createLogInBox();
else {
  createLogOutBox();
  document.getElementsByClassName(
    "menu"
  )[0].innerHTML += `<div class="btn-list">
    <a href="/write"><button>글쓰기</button></a>
  </div>`;
}

(async () => {
  const catalogueElem = document.getElementById("catalogue");
  const list = JSON.parse(
    await (await fetch("/catalogue", { method: "post" })).text()
  );
  list.forEach((item) => {
    catalogueElem.innerHTML += `
<li><a href="${item.href}">${item.name}</a></li>
`;
  });
})();

(async () => {
  const listElem = document.getElementById("list");
  const list = JSON.parse(await (await fetch("/", { method: "post" })).text());
  listElem.innerHTML = `
<li class="header">
  <ul class="row">
    <li class="num box-center">번호</li>
    <li class="title box-center">제목</li>
    <li class="writer box-center">글쓴이</li>
    <li class="createdAt box-center">등록일</li>
  </ul>
</li>
`;
  list.forEach(({ id, title, writer, createdAt }) => {
    listElem.innerHTML += `
<li class="item">
  <a href="/board?id=${id}">
    <ul class="row">
      <li class="num box-center">${id}</li>
      <li class="title">${title}</li>
      <li class="writer box-center">${writer}</li>
      <li class="createdAt box-center">${createdAt}</li>
    </ul>
  </a>
</li>
`;
  });
})();
