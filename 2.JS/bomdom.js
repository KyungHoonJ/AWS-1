console.log(window);
console.log(location);
console.log(history);
// window.open("https://naver.com");
// open();
// window.location
// window.history
// window.console.log()
// a = 0;
// console.log(window.a);
// window.a = 1;
// function a() {}
// const b = () => {};
// console.log(window.a);
// console.log(window.b);
document.getElementById("test").style.color = "blue";
document.getElementById("test").innerHTML =
  "정배야 <span>넌 찾아서 알고있었지?</span>";
// document.getElementsByTagName("span")[0].style.color = "red";

const temp = document.getElementsByTagName("span");
for (let i = 0; i < temp.length; i++) {
  temp[i].style.fontSize = "32px";
}

document.getElementById("test").onclick = function (e) {
  //   location.href = "https://naver.com";
  //   open("https://naver.com", "_blank");
  console.log(e);
};
window.onclick = (e) => {
  console.log(e);
};

// Event
// Handler | Listener | on
// Handler << 이벤트 발생 시 실행되는 함수
// Listener << 이벤트 발생을 받는 기능
// onclick << 이벤트 발생 시 실행되는 함수
// onclick = () => {}
// '() => {}' Handler
// on << 이벤트 발생을 받는 기능
// Listener VS on
// Listener는 통합 관리 시스템 | on은 하나하나가 갖고있는 실행 함수

// 클릭했을 때 --> onclick(인수);

[...document.getElementsByClassName("test")].forEach((item) => {
  item.innerHTML = "이정배";
  item.onclick = (e) => {
    alert("정배야. 총대를 메라");
  };
});

const arr = [
  { name: "이정배", age: 23 },
  { name: "박성민", age: 34 },
  { name: "방지완", age: 29 },
  { name: "정구진", age: 24 },
  { name: "이동찬", age: 29 },
  { name: "이승배", age: 25 },
  { name: "손민복", age: 29 },
  { name: "김강문", age: 27 },
];

// arr 기준으로 테이블에 목록 띄우기
// 번호, 이름, 나이 누르면 항목 별로 정렬하기
// <tbody id="student-list">
const tbodyElem = document.getElementById("student-list");
tbodyElem.innerHTML = "";
arr.forEach((item, i) => {
  item.num = i + 1;
  tbodyElem.innerHTML += `<tr>
    <td>${item.num}</td>
    <td>${item.name}</td>
    <td>${item.age}</td>
  </tr>`;
  // 템플릿 리터럴(`)
});

const drawList = (sortFunc) => {
  tbodyElem.innerHTML = "";
  arr.sort(sortFunc);
  arr.forEach(({ num, name, age }) => {
    tbodyElem.innerHTML += `<tr>
      <td>${num}</td>
      <td>${name}</td>
      <td>${age}</td>
    </tr>`;
  });
};

document.getElementById("num").onclick = () => {
  drawList((a, b) => a.num - b.num);
};

document.getElementById("name").onclick = () => {
  drawList((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
};

document.getElementById("age").onclick = () => {
  drawList((a, b) => a.age - b.age);
};

// 계산기, 0~9 누를수 있고 사칙 연산 가능하고 결과를 웹페이지에 출력하도록(alert 아니다)

// 다음 시간에 풀이 후 심화 및 계산기 만들기(HTML 클릭 버전) << 월요일 풀이
// if(new Date() == new Date('2024.03.01.10:00') && members.length > 3){
//   수업 시작
//}
// if(수업 진행 && new Date() == new Date('2024.03.01.16:00'){
//   수업 진행 = false;
//}
// 가위바위보 게임 로또 || Todo List
// 10 ~ 16 2시간 실습, 30분 풀이, 1시간 식사
// 노랑10, 파랑20, 빨강30, 검정40, 초록45
