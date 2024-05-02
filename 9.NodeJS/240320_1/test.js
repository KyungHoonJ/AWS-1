// 계산기 가져와서 사용해보자.
// const calc = require("./calc");

// console.log(calc.add(1, 2)); // 3
// console.log(calc.minus(1, 2)); // -1
// console.log(calc.multiple(1, 2)); // 2
// console.log(calc.divide(1, 2)); // 0.5

const { add, minus, divide, multiple } = require("./calc");

// const { add, minus, divide, multiple } = calc;

// const add = calc.add;
// const minus = calc.minus;
// const divide = calc.divide;
// const multiple = calc.multiple;

console.log(add(1, 2)); // 3
console.log(minus(1, 2)); // -1
console.log(multiple(1, 2)); // 2
console.log(divide(1, 2)); // 0.5
