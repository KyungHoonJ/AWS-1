# 평가 문제

- Vanilla JS만을 사용하시오.
  - 기본적인 JS만을 사용하시오.
  - Library를 사용하지 못한다.
- Node.js를 사용하시오.
  - Server를 만들고 싶으면 Node.js 없이는 JS가 실행되지 않는다.
  - Node.js에 포함된 Module은 사용할 수 있다.
  - Net, Path, fs
- 라이브러리는 사용하지 못하고 모듈은 사용할 수 있습니다.

| Path    | Method | Request         | Response                        |
| ------- | ------ | --------------- | ------------------------------- |
| /       | GET    | Null            | 게시판 목록웹페이지             |
| /write/ | GET    | Null            | 게시판 글쓰기 웹페이지          |
| /board/ | GET    | Null            | 게시글 웹페이지                 |
| /       | POST   | { page, count } | [ { id, title, createdAt }, … ] |
| /write/ | POST   | { title, text } | redirect /                      |
| /board/ | POST   | { id }          | { id, title, text }             |

    - 끝에 “/”가 붙는 경우는 상관 없음 ex) “/write/”
      - index.html을 생략하고 작성할 수 있다.
      - 게시판에 작성된 내용은 객체로 id, title, createdAt, text를 프로퍼티로 선언되어있다.

      ```javascript
      const board = {
        id: 1, // 프로퍼티 => id <- name, 1 <- value => property
        title: "토요일 보충 수업",
        createdAt: "2024-03-30",
        text: "오늘 점심 뭐먹지?"
      };
      ```

      - 게시판이라는 건 게시글의 모음? => 게시글마다 데이터적으로 이름이 필요할까? => [] / Array(배열)이면 충분하다.
      - 게시판 목록을 받아옴에 있어서 paging 기능이 필요하다.(게시판에 아래에 흔히 보이는 숫자들)

- 추가적인 기능(좋아요, 조회수 등)에 대해서 API를 작성하고 구현하시오.

  - 게시판(위의 board)에 프로퍼티로 추가되어야한다.
  - 요청과 응답을 주고 받으면서 데이터를 받을 때 함께 받을 수 있다.

    ```javascript
    const board = {
      id: 1, // 프로퍼티 => id <- name, 1 <- value => property
      title: "토요일 보충 수업",
      createdAt: "2024-03-30",
      text: "오늘 점심 뭐먹지?",
      like: 0,
      view: 0,
    };
    ```

  - API 문서를 수정할 필요가 생겼다.
    | Path | Method | Request | Response |
    | ------- | ------ | --------------- | ------------------------------- |
    | / | GET | Null | 게시판 목록웹페이지 |
    | /write | GET | Null | 게시판 글쓰기 웹페이지 |
    | /board | GET | Null | 게시글 웹페이지 |
    | / | POST | { page, count } | [ { id, title, createdAt, like, view }, … ] |
    | /write | POST | { title, text } | redirect / |
    | /board | POST | { id } | { id, title, text, like, view } |

- 기능에 대해서 확인한 사항을 모두 작성하시오
  - 스크린샷 필요.
  - 브라우저와 Postman을 통한 확인 모두 필요.
  - 필요할 경우 개발자 도구 사용.

# JS는 어떻게 실행하는가?

- 브라우저에서는 html 문서 내에서 script 엘리먼트를 작성하고 src로 path를 전달하여 실행한다.
- 컴퓨터에서는 terminal에 node `path`를 작성하여 명령을 내린다.
  - path => server.js

## JS는 어떤 언어일까?

- Script 언어, 한줄씩 읽어서 한줄씩 실행한다.
  - 우리가 JS가 어떻게 실행되는지 알려면 => 한줄씩 읽고 한줄씩 해석해보자.

# 코드리뷰

- 코드를 읽고 그것을 해석하고 공부하는? 것
