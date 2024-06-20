import { Component, ReactNode } from "react";

export interface ITodo {
  content: string;
  isComplete: boolean;
}

interface IProps {
  item: ITodo;
  id: string;
  complete(): void;
  remove(): void;
}

interface IState {}

class Todo extends Component<IProps, IState> {
  static STYLE: string = "flex justify-between items-center";
  componentDidMount(): void {
    console.log(this.props);
  }

  render(): ReactNode {
    const {
      id,
      item: { content, isComplete },
      complete,
      remove,
    } = this.props;
    return (
      <div
        className={[
          Todo.STYLE,
          "gap-2",
          "p-1",
          "border-b",
          "border-dashed",
          "border-black",
        ].join(" ")}
      >
        <div className="flex-1">{content}</div>
        <label
          htmlFor={id}
          className={[
            "border",
            "border-gray-400",
            "rounded",
            "p-1",
            "px-2",
            "has-[:checked]:bg-yellow-300",
            "has-[:checked]:text-red-700",
            "select-none", // user-select: none;
          ].join(" ")}
        >
          {isComplete ? "완료" : "진행중"}
          <input
            id={id}
            className="hidden"
            type="checkbox"
            checked={isComplete}
            onChange={complete}
          />
        </label>
        <button
          className="border border-gray-400 rounded bg-gray-200 p-1 px-2 select-none"
          onClick={remove}
        >
          삭제
        </button>
      </div>
    );
  }
}

export default Todo;
