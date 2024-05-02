let arr = [1, 2, 3];
// JS에서 배열은 []로 만든다.

console.log(arr[1]);
// 순서에 대한 숫자를 index

for (let i = 0; i < 3; i++) {
  console.log(arr[i]);
}

const obj = {
  name: "이정배",
  age: 23,
};

console.log(obj.name);
Math.random();

const students = [];
const ljb = {
  name: "이정배",
  age: 23,
  hobby: "운동",
};
console.log(students.length);
students.push(ljb);
console.log(students.length);
console.log(students[0].hobby);
console.log(ljb.hobby);
students[0].hobby = "음악";
console.log(ljb.hobby);
students.push({
  name: "박성민", // 프로퍼티
  age: 34,
  hobby: "운동",
});
// "저는 34살 박성민입니다. 취미는 운동입니다.";
// 23, 2000년생 -> 저는 00년생 이정배입니다.
for (let i = 0; i < students.length; i++) {
  console.log(
    "저는 " +
      students[i].age +
      "살 " +
      students[i].name +
      "입니다. 취미는 " +
      students[i].hobby +
      "입니다."
  );
  let age = (2023 - students[i].age).toString();
  console.log(
    "저는 " + age[2] + age[3] + "년생 " + students[i].name + "입니다."
  );
}

console.log(students);

const arr1 = [1, "2", [1, 2, 3], {}, true, undefined, null, Symbol()];

// scope => {}
// for() {스코프}
// if() {스코프}
// while() {스코프}
// {}
// 블록 스코프
{
  let arr = [3, 2, 1];
  // 위에서 선언, 할당, 초기화한 놈과 다른 놈이다.
}
for (let i = 0; i < 10; i++) {
  console.log(i);
}
for (let i = 0; i < 10; i++) {
  console.log(i);
}
let i = 10;
for (; i < 10; i++) {
  console.log(i);
}

// 객체에서의 {}는 객체 리터럴

{
  const arr = [1, 2, 3, 4, 5, 6];
  arr.push(7);
  console.log(arr.toString());
  arr.pop();
  console.log(arr.toString());
  arr.shift();
  console.log(arr.toString());
  arr.unshift(0);
  console.log(arr.toString());
  arr.reverse();
  console.log(arr.toString());
  arr.sort();
  console.log(arr.toString());
  const arr1 = arr.slice(0, 3);
  console.log(arr1.toString());
  console.log(arr.toString());
  console.log(arr.join(" - "));
  //   console.log(arr.find(()=>{}));
  console.log(arr.indexOf(3));
}
{
  const obj = {};
  obj.a = 1;
  console.log(obj);
  obj.students = students;
  console.log(obj);
}

// 심화
{
  const obj = { a: 1 };
  console.log(obj.a);
  console.log(obj["a"]);

  obj[0] = 1;
  obj[1] = 2;
  obj[2] = 3;
  console.log(obj[1]);
  const arr = [1, 2, 3];
  //   arr == obj
}

{
  const arr = [1, 2];
  const obj = { arr };
  console.log(obj);
  const obj2 = { arr1: [1, 2, 3] };
  const { arr1, arr2 } = obj2; // 구조분해할당
  console.log(arr1);
  console.log(arr2);
  const [a, b] = arr;
  console.log(a);
  console.log(b);
  const [c, ...d] = arr1; // ... : 스프레드 연산자
  //   [1, 2, 3] => [c, ...d] => c = 1, d = [2, 3]
}

// 내일은 즐거운 함수~
// 923
