(async () => {
  const titleElem = document.getElementById("title");
  const writerElem = document.getElementById("writer");
  const createdAtElem = document.getElementById("created_at");
  const textElem = document.getElementById("text");

  let body = location.search;
  if (body) {
    body = body.slice(1);
  } else {
    body = "id=1";
  }

  const { title, writer, createdAt, text } = JSON.parse(
    await (await fetch("/board", { method: "post", body })).text()
  );

  titleElem.innerHTML = title;
  writerElem.innerHTML = writer;
  createdAtElem.innerHTML = createdAt;
  textElem.innerHTML = text;
})();
