# div

- 영역을 나누기 위해 사용하는 HTML Tag
- divide

# p

- 문단을 나누는 Tag
- 글을 작성함에 있어 문단을 나타내는 Tag
- Paragraph

# a

- HyperLink가 생기는 Element?
- HyperLink를 포함하여 다른 문서를 연결하는 Tag
- Anchor

# img

- 이미지 Tag
- image

# ul / ol / li

- List Tag
- ul : 순서가 중요하지 않은 리스트
- ol : 순서를 나타내는 리스트
- li : ol과 ul의 직계 자식, 리스트 내의 목록을 나타내는 Tag
- Unorder List
- Order List
- List Item

# Display

- 요소를 어떻게 보여줄지 설정한다?
- 레이아웃을 결정한다?
- 배치 방법 설정
- block, inline, none, flex, grid
- block, inline : 요소 자체의 배치 방법
- flex, grid : 요소의 자식에 대해 배치 방법

# Margin, Padding

- 외부 여백, 내부 여백

# Position

- 위치 기준 설정
- absolute, relative, static, sticky, fixed

# Box-sizing

- 영역의 크기에 대해 기준을 설정
- Content | Border

# HTML, CSS로 그려라?

```html
<form>...</form>
```

# 전역변수 | 지역변수

- 전역변수 : 파일 전체에서 쓸 수 있는 변수, 함수 외부에서 XX
- 지역변수 : 함수 내에서 선언해서 함수 내에서 사용할 수 있는 변수

## 전연변수

- 프로젝트 기준으로 어디서나 사용할 수 있는 변수
- import, require를 하지 않아도 사용할 수 있다.
- Node.js에서 사용하는 전역 변수는 대표적으로 global이 있다.
- 브라우저에서는 window 객체를 전역으로 사용하기 때문에 {} (Scope) 밖에서 선언, 할당, 초기화된 변수는 모두 사용할 수 있다.
- Math, Number, String, Set, Symbol, console, ...

### Scope

- Function Scope, Block Scope
- 전역스코프, 지역스코프
- 객체????? {} << Object Literal

```js
{
  const temp = 1;
}
```

## 지역변수

- 전역 변수가 아닌 모든 변수?
- 특정 Scope에서만 사용할 수 있는 변수
- 함수 내에서 선언된 변수
- Node.js 상에서 파일 기준 변수들

# Function Declaration / Function Expression / ArrowFunction

## Function Declaration

- 함수 선언식
- 호이스팅

```js
function name() {}
```

## Function Expression

- 함수 표현식
- 호이스팅 막음

```js
const func = function () {};
const test = () => {};
const test2 = function test3() {};
```

## Arrow Function

- 화살표 함수
- thisBinding 진행하지 않음

```js
() => {};
```

## 추가 질문

```js
const temp = {
  func1: () => {
    console.log(this); // temp의 상위 객체(window)
  },
  func2() {
    console.log(this); // temp
  },
  func3: function () {
    console.log(this); // temp
  },
};

var a = 2; // window.a
function foo() {
  console.log("a :", a);
  var a = 1;
  console.log(window.a);
}
foo();
// console.log("a :", a);
```

# 사탕

```js
const scores = "97 86 75 66 55 97 85 97 97 95";
function solution(scores) {
  var answer = 0;
  const arr = scores.split(" ").sort((a, b) => b - a);
  let scoreCount = 0;
  for (let i = 0, nowScore; scoreCount < 4; nowScore = arr[i], i++) {
    if (nowScore != arr[i]) {
      scoreCount++;
    }
    answer++;
  }

  return --answer;
}

function solution(str1, str2) {
  return str1.indexOf(str2);
}

const a1 = [
  [1, 2],
  [2, 4],
];
const b1 = [
  [1, 0],
  [0, 3],
];
// 옛날에... 3D 작업할때 지옥이 생각난다....
// 4*4 행열 사용해서 이동, 회전을 다뤘었지...후
function solution(a, b) {
  let answer = [];
  let tempB = [];
  for (let i = 0; i < a.length; i++) {
    answer.push([]);
    for (let j = 0; j < b[0].length; ++j) {
      let temp = 0;
      for (let k = 0; k < a[0].length; ++k) {
        temp += a[i][k] * b[k][j];
      }
      answer[i].push(temp);
    }
  }
  return answer;
}
solution(a1, b1);
```
