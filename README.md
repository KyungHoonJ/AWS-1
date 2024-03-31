# 인터페이스 구현 재평가

- 일자 : 2024년 4월 1일

## API

| Path    | Method | Request         | Response                                |
| ------- | ------ | --------------- | --------------------------------------- |
| /       | GET    | Null            | 게시판 목록웹페이지                     |
| /write/ | GET    | Null            | 게시판 글쓰기 웹페이지                  |
| /board/ | GET    | Null            | 게시글 웹페이지                         |
| /       | POST   | { page, count } | [ { id, title, writer, createdAt }, … ] |
| /write/ | POST   | { title, text } | redirect /                              |
| /board/ | POST   | { id }          | { id, title, text }                     |
