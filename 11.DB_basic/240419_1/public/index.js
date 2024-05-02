const DAY = ["일", "월", "화", "수", "목", "금", "토"];

const date = new Date();
const dateTitle = `${date.getFullYear()}년 ${(date.getMonth() + 1)
  .toString()
  .padStart(2, "0")}월 ${date.getDate().toString().padStart(2, "0")}일 ${
  DAY[date.getDay()]
}요일`;
document.getElementById("todo-head").innerHTML = dateTitle + " 과제";

(async () => {
  const cookie = document.cookie;
  console.log(cookie);
  if (cookie) {
  } else {
    const regist = await (await fetch("/user/regist")).text();
    document.getElementById("user-box").innerHTML = regist;
  }

  const list = await (await fetch("/todo/")).text();
  document.getElementById("body").innerHTML = list;
})(); // 즉시 실행 함수
