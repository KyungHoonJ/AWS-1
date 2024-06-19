import React from "react";
import Todo, { ITodo } from "./Components/Todo";

interface IProps {}

interface IState<T> {
  list: T[];
}

// <T> << Generic: T
class App extends React.Component<IProps, IState<ITodo>> {
  constructor(props: IProps) {
    super(props);
    this.state = { list: [] };
  }

  componentDidMount(): void {
    this.setState((state: IState<ITodo>) => ({
      ...state,
      list: [...state.list, { content: "오늘 점심은?", isComplete: false }],
    }));
  }

  render(): React.ReactNode {
    return (
      <div>
        {this.state.list.map((item: ITodo, idx: number) => (
          <Todo key={idx} item={item}></Todo>
        ))}
      </div>
    );
  }
}

export default App;
