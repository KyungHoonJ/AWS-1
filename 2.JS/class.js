// Javascript는 어떤 자료구조를 기반으로 두고 있을까?
// ProtoType을 기반으로 언어가 만들어졌다.

const date = new Date("2000.02.24");
console.log(date);

// class

function createPerson(name, age) {
  return { name, age };
}

function createStudent(name, age) {
  let className = "웹 4기";
  return { name, age, className };
}

function Student() {
  this.class = "웹 4기";
  this.into = function () {};
}
const student = new Student();
console.log(student);
console.log({ class: "웹 4기" });

function WebClass(name, age) {
  this.name = name;
  this.age = age;
  //   this.class = "웹 4";
}
function GameClass(name, age) {
  this.name = name;
  this.age = age;
  this.class = "게임";
}
WebClass.prototype = student;
const smb = new WebClass("손민복", 29);
console.log(smb);
console.log(smb.class1);
// const arr = [
//   { name: "이정배", age: 23 },
//   { name: "박성민", age: 34 },
//   { nmae: "방지완", age: 29 },
//   { name: "정구진", age: 24 },
//   { name: "이동찬", aedg: 29 },
//   { name: "이승배", age: 25 },
//   { name: "손민복", age: 29 },
//   { name: "김강문", age: 27 },
// ];
student.class = "웹 5기";
const arr = [
  new WebClass("이정배", 23),
  new WebClass("박성민", 34),
  new WebClass("방지완", 29),
];

console.log(arr);

class WebClass2 {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const ldc = new WebClass2("이동찬", 29);
console.log(ldc["#name"]);

class Student2 extends WebClass2 {
  class = "웹 4기";
  constructor(name, age, className) {
    super(name, age); // super = WebClass2
    this.class = className;
  }
}

const ljb = new Student2("이정배", 23);
console.log(ljb);

// new
let num = 1;
console.log(num.toString());
num = new Number(1);
console.log(num);
num = new String(num);
console.log(num);
num = "1";
console.log(num);
let arr1 = new Array();
console.log(arr1);
console.log(arr);

console.log("asdf");

class Array2 {
  #count = 0;
  length = this.#count;
  push(value) {
    this[this.#count] = value;
    this.#count += 1;
    this.length = this.#count;
  }
  pop() {
    this.#count -= 1;
    const temp = this[this.#count];
    this[this.#count] = undefined;
    // delete this[this.#count];
    this.length = this.#count;
    return temp;
  }
  forEach(func) {
    for (let i = 0; i < this.#count; i++) {
      func(this[i]);
    }
  }
  map(func) {
    const temp = new Array2();
    for (let i = 0; i < this.#count; i++) {
      temp.push(func(this[i]));
    }
    return temp;
  }
}

const tempArr = new Array2();
tempArr.push(11);
console.log(tempArr[0]);
console.log(tempArr.length);
console.log(tempArr.pop());
console.log(tempArr[0]);
console.log(tempArr.length);
console.log(tempArr);

tempArr.push(1);
tempArr.push(2);
tempArr.push(3);
tempArr.push(4);
tempArr.push(5);
tempArr.forEach(function (item) {
  console.log(item + 10);
});
console.log(
  tempArr.map(function (item) {
    return item ** 2;
  })
);

const tempArr2 = [];
tempArr2.push(1);
tempArr2.push(2);
tempArr2.push(3);
tempArr2.push(4);
tempArr2.push(5);
tempArr2.forEach(function (item) {
  console.log(item + 10);
});

const tempFunc = (item) => {
  console.log(item);
};
tempArr2.forEach((item) => {
  console.log(item);
});
tempArr2.forEach(tempFunc);
tempArr2.forEach(console.log);

// 클래스 과제
// class 예약어를 사용하여 취미 데이터을 만들어보자.
// 취미는 이름과 방법, 소요 시간(분), 소요 비용(천원단위)로 저장
// toString 호출 시 아래와 같이 결과를 변수에 저장 가능하도록
// '이름'은/는 약 '소용비용'만원을 사용하여 '소요시간'동안 즐길 수 있다.
class Hobby {
  name;
  how;
  time;
  cost;
  constructor(name, how, time, cost) {
    this.name = name;
    this.how = how;
    this.time = time;
    this.cost = cost / 1000;
  }
  toString() {
    return (
      this.name +
      "은/는 약 " +
      this.cost / 10 +
      "만원을 사용하여 " +
      this.time / 60 +
      "시간 동안 즐길 수 있다."
    );
  }
}
const palworld = new Hobby(
  "펠월드",
  "스팀에서 펠월드를 사서 실행한다. 그리고 즐긴다",
  40 * 60,
  32000
);
console.log(palworld.toString());

// add / minus / multi / divide
// 1 + 2 * 3 / 4 - 5
// minus(add(1, divide(multi(2, 3), 4)), 5)
