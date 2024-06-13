# React

- Example

  ```jsx
  function MyButton() {
    return <button>I'm a button</button>;
  }
  ```

  ```js
  function MyButton() {
    const temp = document.createElement("button");
    temp.innerHTML = "I'm a button";
    return temp;
  }
  ```

- 작성된 코드를 Javascript 문법에 맞게 수정해줘야한다.
  - 이렇게 코드를 바꿔주는 것을 뭐라고 할까?

# Compiler

- 작성한 코드를 기계어로 바꾸는 프로그램
- Javascript는 인터프리터 언어 -> 컴파일 단계가 따로 있지 않고 실행과 동시에 이루어진다.
- React에서 사용하는 언어가 JS일까? -> JS + HTML -> JSX : JavaScript Extension

# babel

```js
var a = 1;
var a = 2;
function add(a, b) {
  return a + b;
}

const add1 = function (a, b) {
  return a + b;
};
const add2 = (a, b) => {
  return a + b;
};
const add3 = (a, b) => a + b;
```

- "어쩔TV" -> babel : 2000년대 유행어로 바꿔줘 -> "KIN"

# babel 실습

```bash
npm init -y
npm i -D @babel/core @babel/cli

npx babel src --out-dir dist1 # 첫 바벨 사용

npm i -D @babel/preset-env
npx babel src --out-dir dist2 --presets=@babel/preset-env

# babel.config.json 파일 추가
npx babel src --out-dir dist3
npx babel src -d dist3
```

# Typescript

```bash
npm i -D typescript

npx tsc # TypeScript Compiler

# babel에서 typescript 컴파일
npm i -D @babel/preset-typescript
npm run build
```
