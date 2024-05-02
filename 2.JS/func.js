function a() {
  console.log("a 함수를 실행했다.");
}
// a();
console.log(a);

function add(a, b) {
  console.log(a + b);
  return a + b; // 반환 << 함수의 코드를 멈춰준다.
  // console.log(a); 위에서 return해서 무의미한 코드가 되었다.
}
let result = add(1, 2);
console.log(result); // undefiend -> 3

// 함수의 선언식
// function 이름(매개 변수) { 실행 코드 }
// 호출할 때 -> 함수이름(인자);
// 함수도 결국 무엇이다? 값이다.

const plus = add;
plus(2, 3);

// 표현식
const minus = function (a, b) {
  return a - b;
};
console.log(minus(2, 3));

// 익명함수
// function (a, b) {
//     return a * b;
//   };

// 표현식 = 변수 선언 + 익명함수 할당

// 즉시실행함수
(function (a, b) {
  console.log(a * b);
  return a * b;
})(4, 5); // 솔직히 별로 쓸 일이 없다....

const tempFunc = function (a, b) {
  a(b);
};

tempFunc(console.log, "내용을 확인중");
// 함수를 인자로 전달할 때 콜백함수 라고 부른다.

const arr = [
  {
    name: "이정배",
    age: 23,
    introduce: function (nick) {
      console.log(nick + " " + this.name + "입니다.");
    },
  },
  { name: "박성민", age: 34 },
  { name: "방지완", age: 29 },
  { name: "정구진", age: 24 },
  { name: "이동찬", age: 29 },
  { name: "이승배", age: 25 },
  { name: "손민복", age: 29 },
  { name: "김강문", age: 27 },
];
arr[0].introduce("반장");

const temp = arr.find(function (item) {
  if (item.name == "박성민") return true;
});
console.log(temp);

console.log(
  arr.filter(function (item) {
    return item.age < 29;
  })
);

arr.forEach(function (item) {
  console.log(item.name);
});

let num = 0;
console.log(
  arr.map(function (item) {
    const temp = { ...item };
    num += 1;
    temp.num = num;
    return temp;
  })
);

console.log(arr);

console.log(
  arr.sort(function (a, b) {
    return b.age - a.age;
    // prev, curr
  })
);

// 변수명, 함수명 << 식별자
// 변수 식별자는 명사로 시작해야한다.
// 함수 식별자는 동사로 시작해야한다.

const tempFunc1 = () => {};
// 화살표 함수

const add1 = (a, b) => {
  return a + b;
};

const add2 = (a, b) => a + b;

const getName = (item) => item.name;
console.log(arr.map(getName));

const func369 = function (n) {
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    // if (i % 3 == 0) {
    // if (
    //    i.toString().indexOf("3") > -1 ||
    //    i.toString().indexOf("6") > -1 ||
    //    i.toString().indexOf("9") > -1
    // ) {
    //   let tempStr = "";
    //   if (i % 10 > 0 && (i % 10) % 3 == 0) {
    //     tempStr += "짝";
    //     count++;
    //   }
    //   if (i > 10 && parseInt(i / 10) % 3 == 0) {
    //     tempStr += "짝";
    //     count++;
    //   }
    //   console.log(tempStr);
    // } else {
    //   console.log(i);
    // }

    let temp = i.toString();
    // if (temp.indexOf("3") > -1) {
    //   temp = temp.replaceAll("3", "짝");
    // }
    // if (temp.indexOf("6") > -1) {
    //   temp = temp.replaceAll("6", "짝");
    // }
    // if (temp.indexOf("9") > -1) {
    //   temp = temp.replaceAll("9", "짝");
    // }
    // if (temp.indexOf("짝") > -1) {
    //   temp = temp.replaceAll("1", "");
    //   temp = temp.replaceAll("2", "");
    //   temp = temp.replaceAll("4", "");
    //   temp = temp.replaceAll("5", "");
    //   temp = temp.replaceAll("7", "");
    //   temp = temp.replaceAll("8", "");
    //   temp = temp.replaceAll("0", "");
    //   count += temp.length;
    // }
    // 정규표현식
    temp = temp.replace(/[3,6,9]/g, "짝");
    if (temp.indexOf("짝") > -1) {
      temp = temp.replace(/[0-9]/g, "");
      count += temp.length;
    }
    console.log(temp);
  }
  return count;
};

const tempCount = func369(100);
console.log(tempCount);

// arr.reduce()

// 1, 2, 짝, 4

// func369(n)
// 1 ~ 100 사이의 n을 인자로 전달하면 1부터 n까지 출력하는 함수를 완성하시오.
// 3, 6, 9에 따라서 "짝"을 출력
// 33의 경우 "짝짝" 출력
// "짝"의 총 개수를 반환
