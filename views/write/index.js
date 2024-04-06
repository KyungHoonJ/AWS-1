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
  userBox.action = "http://localhost:3000/user/logout";
  userBox.classList.add("logout");
  userBox.innerHTML = `<h4>${
    document.cookie.split(";")[0].split("=")[1]
  }님 어서오세요</h4>
<button>Log Out</button>`;
};

if (document.cookie == "") location.href = "/";
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
