# 평가 문제

- API 문서

| Path         | Method | Query | RequestBody           | RequestCookie | ResponseBody           | ResponseCookie | 비고                      |
| ------------ | ------ | ----- | --------------------- | ------------- | ---------------------- | -------------- | ------------------------- |
| /            | GET    |       |                       |               | 게시판 목록 웹페이지   |                |                           |
| /write       | GET    |       |                       | user          | 게시판 글쓰기 웹페이지 |                | cookie 없을 시 redirect / |
| /board       | GET    | id    |                       |               | 게시글 웹페이지        |                |                           |
| /regist      | GET    |       |                       |               | 회원가입 웹페이지      |                |                           |
| /write       | POST   |       | { title, text }       |               | redirect /             |                |                           |
| /user/regist | POST   |       | { id, pw, pwr, name } |               | redirect /             |                |                           |
| /user/login  | POST   |       | { id, pw }            |               | redirect /             | user=user.name |                           |
| /user/logout | POST   |       |                       | user          | redirect /             | user=null      |                           |
