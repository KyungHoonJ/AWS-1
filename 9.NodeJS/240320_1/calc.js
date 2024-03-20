// 계산기를 위한 함수들을 만들어서 내보내보자
function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiple(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// module.exports = { add, minus, multiple, divide };
module.exports = {
  add(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiple(a, b) {
    return a * b;
  },
};
