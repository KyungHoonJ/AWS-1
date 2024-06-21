import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.scss";
import Test from "./Components/Test";

// componentDidMount
// componentDidUpdate
// componentWillUnmount
// useEffect

function App(): JSX.Element {
  const [test, setTest]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
    // Dispatch : 액션을 실행하는 메서드 타입
    // SetStateAction : 상태값을 업데이트하는 액션의 메서드 타입
  ] = useState<boolean>(true);
  // useState => Hook
  // use***** => 함수형 컴포넌트에서 사용하는 Hook
  // console.log(test);
  // let test1 = "test";
  // console.log(test1);

  const [test1, setTest1] = useState<string>("");

  // componentDidMount
  // componentDidUpdate
  // 항상 실행된다. render 돌릴때마다
  // useEffect(() => {
  //   console.log("useEffect");
  // });

  // componentDidMount
  useEffect(() => {
    console.log("Mount");
  }, []);

  // componentDidMount
  // componentDidUpdate
  useEffect(() => {
    console.log("testing1");
    return () => {
      console.log("testing????");
    };
  }, [test1]);
  // 2번째 인자인 state[]이 변경되었을 때 실행된다.

  return (
    <div className="container mx-auto">
      <div
        className="border"
        onClick={() => {
          setTest(!test);
          // test = !test;
          // console.log(test);
          // test1 = "test1";
          // console.log(test1);
        }}
      >
        test
      </div>
      {test && <Test></Test>}
      <input
        type="text"
        value={test1}
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          setTest1(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
