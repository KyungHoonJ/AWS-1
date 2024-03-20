const test1 = require("./test1.js");
// const test2 = require("./test2.js");
// import { text } from "./test2.js";
// import test2 from "./test2.js";
// 참조?
// 가져오기 import

global.a = 1;

console.log(global.a);
console.log(a);

console.log(test1);
// console.log(test2);
// console.log(text);

// export, 내보내기
