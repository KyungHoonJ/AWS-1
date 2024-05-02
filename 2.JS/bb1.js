// 컴퓨터가 3개의 수를 선택
// - 3개의 수가 중복되면 안된다. 1  ~ < 10 << 0 ~ 9 << 0 <= ~ < 1
let comSel1 = Math.floor(Math.random() * 9 + 1);
let comSel2 = Math.floor(Math.random() * 9 + 1);
while (comSel1 == comSel2) {
  comSel2 = Math.floor(Math.random() * 9 + 1);
}
let comSel3 = Math.floor(Math.random() * 9 + 1);
while (comSel1 == comSel3 || comSel2 == comSel3) {
  comSel3 = Math.floor(Math.random() * 9 + 1);
}
console.log(comSel1, comSel2, comSel3);

for (let strike = 0, ball = 0; strike != 3; ) {
  strike = ball = 0;
  // 유저 선택
  const userSel1 = prompt("1 ~ 9까지의 첫번째 숫자를 선택해주세요.");
  const userSel2 = prompt("1 ~ 9까지의 두번째 숫자를 선택해주세요.");
  const userSel3 = prompt("1 ~ 9까지의 세번째 숫자를 선택해주세요.");

  // 결과 확인
  //   let strike = 0;
  //   let ball = 0;
  //   let out = 0;
  if (userSel1 == comSel1) {
    // Strike
    strike += 1;
  } else if (userSel1 == comSel2 || userSel1 == comSel3) {
    ball += 1;
  }
  if (userSel2 == comSel2) {
    // Strike
    strike += 1;
  } else if (userSel2 == comSel1 || userSel2 == comSel3) {
    ball += 1;
  }
  if (userSel3 == comSel3) {
    // Strike
    strike += 1;
  } else if (userSel3 == comSel1 || userSel3 == comSel2) {
    ball += 1;
  }

  console.log(userSel1, userSel2, userSel3);
  console.log(
    "S : " + strike + ", B : " + ball + ", O : " + (3 - strike - ball)
  );
}

console.log("이걸 맞추네?");
