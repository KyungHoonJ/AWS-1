// 게시글 클래스
class Board {
  static #count = 1;
  #id;
  #title;
  #writer;
  #createdAt;
  #content;
  #isNotice = false;

  constructor(title, writer, content) {
    this.#id = Board.#count++;
    this.#title = title;
    this.#writer = writer;
    this.#content = content;
    this.#createdAt = this.#createDate();
  }

  #createDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  getId = () => this.#id;
  getTitle = () => this.#title;
  getWriter = () => this.#writer;
  getContent = () => this.#content;
  getCreatedAt = () => this.#createdAt;
  getIsNotice = () => this.#isNotice;
}

// 게시판 목록
const listElem = document.getElementById("list");

const list = [
  new Board("오늘의 점심은?", "이정배", "도시락"),
  new Board("오늘의 저녁은?", "이승배", "뭐먹지?"),
  new Board("오늘의 과제는?", "방지완", "지워주세요."),
];
console.log(list);

// 게시판 목록 랜더링
const titleElem = document.getElementById("view-title");
const writerElem = document.getElementById("view-writer");
const createdAtElem = document.getElementById("view-created_at");
const contentElem = document.getElementById("view-content");

const setView = (idx) => {
  titleElem.innerText = list[idx].getTitle();
  writerElem.innerText = list[idx].getWriter();
  createdAtElem.innerText = list[idx].getCreatedAt();
  contentElem.innerText = list[idx].getContent();
};

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
    const tempElem = document.createElement("li");

    tempElem.classList.add("item");
    if (item.getIsNotice()) tempElem.classList.add("notice");

    tempElem.innerHTML = `<ul class="row">
    <li class="num box-center">${item.getId()}</li>
    <li class="title">${item.getTitle()}</li>
    <li class="writer box-center">${item.getWriter()}</li>
    <li class="createdAt box-center">${item.getCreatedAt()}</li>
  </ul>`;
    tempElem.onclick = () => {
      setView(item.getId() - 1);
    };

    listElem.append(tempElem);
  });
};

reRender();

// 게시글 작성
document.getElementById("add-btn").onclick = (e) => {
  e.preventDefault();
  list.push(
    new Board(
      e.target.form.title.value,
      e.target.form.writer.value,
      e.target.form.content.value
    )
  );

  e.target.form.content.value =
    e.target.form.title.value =
    e.target.form.writer.value =
      "";
  reRender();
};
