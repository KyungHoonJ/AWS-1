# Express에서 Jest로 테스트하기

## 설치

```bash
npm init -y
npm i express
npm i -D typescript ts-node @types/node @types/express jest ts-jest @types/jest
npx tsc --init
```

## 세팅

- tsconfig.json

  ```json
  {
    "compilerOptions": {
      "rootDir": "./src",
      "outDir": "./build"
    },
    "include": ["./src/**/*.ts"],
    "exclude": ["node_modules"]
  }
  ```

- jest.config.js

```js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```
