import { Component, ReactNode } from "react";

export interface ITodo {
  content: string;
  isComplete: boolean;
}

interface IProps {
  item: ITodo;
  id: string;
  complete(): void;
}

interface IState {}

class Todo extends Component<IProps, IState> {
  componentDidMount(): void {
    console.log(this.props);
  }

  render(): ReactNode {
    return (
      <div
        className={[
          "flex justify-between",
          "items-center",
          "gap-2",
          "p-1",
          "border-b",
          "border-dashed",
          "border-black",
        ].join(" ")}
      >
        <div className="flex-1">{this.props.item.content}</div>
        <label
          htmlFor={this.props.id}
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
          완료
          <input
            id={this.props.id}
            className="hidden"
            type="checkbox"
            checked={this.props.item.isComplete}
            onChange={this.props.complete}
          />
        </label>
        <button className="border border-gray-400 rounded bg-gray-200 p-1 px-2 select-none">
          삭제
        </button>
      </div>
    );
  }
}

export default Todo;
