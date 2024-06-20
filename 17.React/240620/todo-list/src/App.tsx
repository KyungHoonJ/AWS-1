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
      list: [
        ...state.list,
        { content: "그제 점심은?", isComplete: false },
        { content: "어제 점심은?", isComplete: false },
        { content: "오늘 점심은?", isComplete: false },
        { content: "내일 점심은?", isComplete: false },
        { content: "미래 점심은?", isComplete: false },
      ],
    }));
  }

  complete(idx: number): void {
    this.setState((state: IState<ITodo>) => {
      state.list[idx].isComplete = !state.list[idx].isComplete;
      // return state;
      return { ...state, list: [...state.list] };
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        {/* {["string", "string", "string", "string", "string"]} */}
        {this.state.list.map((item: ITodo, idx: number) => (
          <Todo
            key={idx}
            item={item}
            id={`todo-complete-${idx}`}
            complete={() => this.complete(idx)}
          ></Todo>
        ))}
      </div>
    );
  }
}

export default App;
