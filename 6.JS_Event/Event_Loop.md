# Event Loop

- JS 어떻게 작동하는가?

## Web APIs

- 브라우저가 내부적으로 실행하고 있는 스레드
- setTimeout, setInterval과 같이 따로 실행되어야하는 코드가 실행되고 있음
- Ajax 라고 하는 기능도 포함(요청을 보내는 기능)
- 코드를 실행함에 있어서 기다리는 것을 동기, 안기다리는 것을 비동기라고 한다.

# Event Loop

- 우리가 작성한 코드가 실행되는 곳

# JS가 실행되는 순서

1. 코드를 한번 읽는다.

- Execution Context(실행 컨텍스트)를 생성한다.
- Varialbe Environment에 변수, 함수들을 선언한다.(Hoisting)
  ```javascript
  var a = 1;
  ```
  - 실행 컨텍스트가 생성된다.
  - Variable Environment에 a라는 변수가 선언된다.
- Lexical Environment에 Variable Environment를 복사해온다.
  - Variable Environment의 내용을 Lexical Environment의 Environment Record(통칭 Record)에 복사한다.
- Outer Lexical Environment를 설정한다.
  - 외부 Lexical Environment가 무엇인지 Reference를 할당한다.
- ThisBinding을 통해 this 변수를 할당한다.

# 인터페이스 구현

- 인터페이스 == Interface(API)
