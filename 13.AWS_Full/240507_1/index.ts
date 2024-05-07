// npm init
// npm i -D typescript

const str = "안녕하세요. 타입 스크립트?";
console.log(str);
let num = "1";
console.log(num);

const add = (a: number, b: number): number => {
  return a + b;
};
const addStr = (a: any, b: any): any => {
  return a + b;
};
console.log(add(1, 2));
const temp: { a: number } = { a: 1 };

add(1, "2");
