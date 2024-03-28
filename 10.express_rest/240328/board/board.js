const listElem = document.getElementById("list");

class Board {
  static #count = 1;
  #id;
  #title;
  #writer;
  #createdAt;
  #isNotice = false;

  constructor(title, writer) {
    this.#id = Board.#count++;
    this.#title = title;
    this.#writer = writer;
    this.#createdAt = this.#createDate();
  }

  #createDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  getId = () => this.#id;
  getTitle = () => this.#title;
  getWriter = () => this.#writer;
  getCreatedAt = () => this.#createdAt;
  getIsNotice = () => this.#isNotice;
}

const list = [
  new Board("오늘의 점심은?", "이정배"),
  new Board("오늘의 저녁은?", "이승배"),
  new Board("오늘의 과제는?", "방지완"),
];
console.log(list);

const reRender = () => {
  //   listElem.innerHTML = "";
  listElem.innerHTML = `<li class="header">
      <ul class="row">
        <li class="num box-center">번호</li>
        <li class="title box-center">제목</li>
        <li class="writer box-center">글쓴이</li>
        <li class="createdAt box-center">등록일</li>
      </ul>
      </li>`;

  list.forEach((item) => {
    listElem.innerHTML += `<li class="item${
      item.getIsNotice() ? " notice" : ""
    }">
      <ul class="row">
        <li class="num box-center">${item.getId()}</li>
        <li class="title">${item.getTitle()}</li>
        <li class="writer box-center">${item.getWriter()}</li>
        <li class="createdAt box-center">${item.getCreatedAt()}</li>
      </ul>
    </li>`;
  });
};

reRender();

document.getElementById("add-btn").onclick = (e) => {
  e.preventDefault();
  list.push(new Board(e.target.form.title.value, e.target.form.writer.value));

  e.target.form.title.value = e.target.form.writer.value = "";
  reRender();
};
