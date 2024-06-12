import logo from "./logo.svg";
import "./App.css";

import { Component } from "react";
class Test extends Component {
  temp = () => {
    console.log("하이?");
    alert("이거 쓰지 마라" + this.props.value);
  };
  render() {
    return (
      <div id="test" onClick={this.temp} style={{ userSelect: "none" }}>
        이건 테스트 중이야 {this.props.value}
      </div>
    );
  }
}

const arr = [1, 2, 3, 4, 5];

function App() {
  return (
    <div className="App">
      <h1>하이? 내 이름은 리액트야?</h1>
      {arr.map((item) => (
        <Test value={item} key={item}></Test>
      ))}
    </div>
  );
}

export default App;
