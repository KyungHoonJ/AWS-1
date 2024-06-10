# Class Diagram

- 클래스를 어떻게 할당하고 상속하고 하는지 정리하는 문서

## Javascript

- Prototype을 기반으로한 언어

## 왜 클래스를 사용해야할까?

- React 때문에? << 함수형이 더 편하다~
- 앞으로 많이 다루게 될 Typescript가 자료형(Type)에 대해서 엄청 빡빡하게 굴기 때문에
  - 어떤 데이터를 받았다. -> number? string? -> 확실하게 정해줘야한다.
  - 하나의 함수는 정해진 매개변수를 받고 정해진 결과를 내보낸다. -> 다른 걸 내보내고 싶으면? -> 다른 함수를 선언한다.
  - 우리가 생각했을 때 하나의 기능을 가진 함수가 너무나 많은 개수로 선언이 될 수 있다. -> 묶어서 하나로 만들고 싶으면? -> 객체 -> 이 객체를 사용해서 다른 객체를 또 만들고 싶다. -> 클래스

## Javascript에서는 이 편한 클래스를 왜 사용하지 않았을까?

```js
const bjw = { name: "방지완" };
const ldc = { name: "이동찬" };
```

- class << 키워드가 JS에 포함된 게 언제일까? -> ES6 -> 왜 이전에는 class라고 얘기하지 않았을까?
- class의 단점이 뭘까?
  - 선행으로 생각해야한다. -> 미리 설계를 해야한다? -> 왜? -> 클래스란? : 도장/공장 | 결과 : 인스턴스 객체 -> 도장 만들어야한다.
  - 필요치 않은 메모리를 잡을 수 있다.
- 질문 : 그냥 객체로 내보내면 되지 않아요?
  - 답변 : Type이 불명확해진다.

## 대표적으로 클래스의 장점

- 어떠한 객체에 대해서 다른 객체로 쉽게 변경할 수 있다.

```js
app.get("path", (req, res, next) => {
  // req : Request
  // res : Response
  // next : 다음?
});

new Sequelize(mysql);
new Sequelize(oracle);
```

# API

- Application Programing Interface

# ERD

- Entity Relationship Diagram

# Flow Chart, Sequence Diagram 제출!
