import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App({ list }: { list?: number[] }) {
  return (
    <div className="App">
      <a href="">리액트 테스트중</a>
      <ul>{list && list.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

export default App;
