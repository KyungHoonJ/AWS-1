const comSel = [];
while (comSel.length < 3) {
  const temp = parseInt(Math.random() * 8 + 1);
  if (comSel.indexOf(temp) == -1) {
    comSel.push(temp);
  }
}

console.log(comSel);

let result = [0, 0, 0];
let isEnd = false;
while (result[0] != 3 && !isEnd) {
  result = [0, 0, 0];
  const userSel = [];
  while (userSel.length < 3) {
    let temp = prompt("1~9 중 1번째 숫자를 입력해주세요.");
    if (temp == "끝") {
      isEnd = true;
      break;
    }
    userSel.push(+temp);
  }
  if (isEnd) {
    console.log("강제 종료");
    break;
  }

  for (let i = 0; i < userSel.length; i++) {
    const temp = comSel.indexOf(userSel[i]);
    if (temp == -1) {
      result[2] += 1;
    } else if (comSel[temp] == userSel[temp]) {
      result[0] += 1;
    } else {
      result[1] += 1;
    }
  }
  console.log("유저 입력 : " + userSel.join(""));
  console.log("S : " + result[0] + ", B : " + result[1] + ", O : " + result[2]);
}

console.log("컴퓨터의 숫자는 " + comSel.join("") + "이었습니다~");
