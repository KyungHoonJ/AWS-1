import { Component, ReactNode } from "react";

export interface ITodo {
  content: string;
  isComplete: boolean;
}

interface IProps {
  item: ITodo;
}

interface IState {}

class Todo extends Component<IProps, IState> {
  componentDidMount(): void {
    console.log(this.props);
  }
  render(): ReactNode {
    return <div>Todo Item</div>;
  }
}

export default Todo;
