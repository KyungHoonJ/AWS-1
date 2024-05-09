// XMLHttpRequest
// AJax 아작스, 에이젝스
//   - Asynchronous Javascript And XML
//   - 비동기 통신(Javscript를 이용한)
// XML : eXtensible Markup Language
//   - `<xml>`
// HTML : HyperText Markup Language

// const registForm = document.getElementById("regist");
const registForm = document.forms.regist;
// console.log(registForm);
const emailResultElem = document.getElementById("email-result");
const pwResultElem = document.getElementById("pw-result");
const checkResultElem = document.getElementById("pw-check-result");
const nickResultElem = document.getElementById("nick-result");

let isEmail = false,
  isPw = false,
  isCheck = true,
  isNick = true;

registForm.email.oninput = (e) => {
  // [a-z0-9]+@[a-z]+\.[a-z]{2,3}
  // ^[A-z0-9]{2,20}+@[A-z]{2,20}+\.[a-z]{2,3}$
  // ^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$

  const emailReg = /^[A-z0-9가-힣]+@[A-z]+\.[a-z]{2,3}$/; // RegExp, 정규표현식
  if (!emailReg.test(e.target.value)) {
    emailResultElem.innerHTML = "이메일 형식을 지켜주세요.";
    isEmail = false;
  } else {
    emailResultElem.innerHTML = "";
    isEmail = true;
  }
};

let nowPw;
registForm.pw.oninput = (e) => {
  const pwReg = /(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]){8,30}/; // RegExp, 정규표현식
  console.log(e.target.value);
  isPw = false;

  if (e.target.value.length < 8 || e.target.value.length > 30) {
    pwResultElem.innerHTML =
      "비밀번호는 8 글자 이상, 30글자 이하로 작성하세요.";
  } else if (!pwReg.test(e.target.value)) {
    pwResultElem.innerHTML = "비밀번호는 영어, 특수문자, 숫자를 포함하세요.";
  } else {
    isPw = true;
    nowPw = e.target.value;
    pwResultElem.innerHTML = "";
  }
};

registForm["pw-check"].oninput = (e) => {
  isCheck = false;

  if (e.target.value != nowPw) {
    checkResultElem.innerHTML = "비밀번호를 확인해주세요.";
  } else {
    isCheck = true;
    checkResultElem.innerHTML = "";
  }
};

// form에서의 요청 보내기 == submit
registForm.onsubmit = (e) => {
  e.preventDefault(); // 엘리먼트의 기본 기능을 멈춘다.
  //   console.log(registForm.email.value);
  //   console.log(registForm.pw.value);
  //   console.log(registForm["pw-check"].value);
  //   console.log(registForm.nick.value);
  if (!(isEmail && isPw && isCheck && isNick)) {
    alert("내용 확인 후 다시 시도해주세요.");
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("post", "http://localhost:8000/user/regist");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(
    JSON.stringify({
      email: registForm.email.value,
      pw: registForm.pw.value,
      "pw-check": registForm["pw-check"].value,
      nick: registForm.nick.value,
    })
  );

  xhr.onload = () => {
    if (xhr.status == 200) {
      alert("성공!");
      location.href =
        "http://127.0.0.1:5501/13.AWS_Full/240508/Front/login/index.html";
    } else if (xhr.status == 400) {
      alert("비밀번호 확인해!");
      // 권한 문제로 거절
    } else if (xhr.status == 409) {
      alert("중복됐어");
      // 기존 서버 정보와 충돌
    } else {
      alert("알 수 없는 오류 발생");
    }
  };
};
