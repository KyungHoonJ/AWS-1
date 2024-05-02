const calcElem = document.getElementById("calculator");

let resultStr = "";

const setResultStr = (str) => {
  if (resultStr == "0") {
    resultStr = "";
  }
  if (str == "reset") {
    resultStr = "0";
  } else if (str == "/" || str == "*" || str == "+" || str == "-") {
    resultStr += " " + str + " ";
  } else {
    resultStr += `${str}`;
  }
};

document.getElementById("reset").onclick = () => {
  setResultStr("reset");
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("divide").onclick = () => {
  setResultStr("/");
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("multiple").onclick = () => {
  setResultStr("*");
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("minus").onclick = () => {
  setResultStr("-");
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("num-7").onclick = () => {
  setResultStr(7);
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("num-8").onclick = () => {
  setResultStr(8);
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("num-9").onclick = () => {
  setResultStr(9);
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("num-4").onclick = () => {
  setResultStr(4);
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("num-5").onclick = () => {
  setResultStr(5);
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("num-6").onclick = () => {
  setResultStr(6);
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("plus").onclick = () => {
  setResultStr("+");
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("num-1").onclick = () => {
  setResultStr(1);
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("num-2").onclick = () => {
  setResultStr(2);
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("num-3").onclick = () => {
  setResultStr(3);
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("num-0").onclick = () => {
  setResultStr(0);
  document.getElementById("result").innerText = resultStr;
};
document.getElementById("dot").onclick = () => {
  setResultStr(".");
  document.getElementById("result").innerText = resultStr;
};

const operate = () => {
  // 얘는 계산하기 위한 내용
  const [num1, operator, num2] = resultStr.split(" ");
  if (operator == "+") {
    resultStr = +num1 + +num2;
  } else if (operator == "-") {
    resultStr = +num1 - +num2;
  } else if (operator == "*") {
    resultStr = +num1 * +num2;
  } else if (operator == "/") {
    resultStr = +num1 / +num2;
  }
  document.getElementById("result").innerText = resultStr;
};

document.getElementById("equal").onclick = operate;
