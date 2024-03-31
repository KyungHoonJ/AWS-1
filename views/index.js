(async () => {
  const listElem = document.getElementById("list");

  let body = location.search;
  if (body) {
    body = body.slice(1);
  } else {
    body = "page=1&count=4";
  }

  const list = JSON.parse(
    await (await fetch("/", { method: "post", body })).text()
  );

  console.log(list);
  listElem.innerHTML = `
<li class="header">
  <ul class="row">
    <li class="num box-center">번호</li>
    <li class="title box-center">제목</li>
    <li class="writer box-center">글쓴이</li>
    <li class="createdAt box-center">등록일</li>
    <li class="view box-center">조회수</li>
    <li class="like box-center">추천수</li>
  </ul>
</li>`;
  list.forEach(({ id, title, writer, createdAt, isNotice }) => {
    listElem.innerHTML += `
<li class="item${isNotice ? " notice" : ""}">
  <a href="/board?id=${id}">
    <ul class="row">
      <li class="num box-center">${id}</li>
      <li class="title">${title}</li>
      <li class="writer box-center">${writer}</li>
      <li class="createdAt box-center">${createdAt}</li>
      <li class="view box-center">0</li>
      <li class="like box-center">0</li>
    </ul>
  </a>
</li>`;
  });
})();
