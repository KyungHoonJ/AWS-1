# 명령어 순서 모음?

## 설치

```bash
cd 10.express_rest/240404
touch server.js
touch .env
npm init
npm i express morgan dotenv
npm i -D nodemon
```

## package.json 파일 수정

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  }
}
```

## 실행

```bash
npm start
```

# multer

- file upload를 시도했을 때 backend(express) 받아줄 수 있게 도와주는 라이브러리

## 한글 이슈

- 1.4.5는 현재 안됨(240404)

```bash
npm i multer@1.4.4
```
