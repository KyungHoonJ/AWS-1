import { Component } from "react";

class Todo extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <div>Todo Item</div>;
  }
}

export default Todo;
