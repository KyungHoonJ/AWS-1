import { ChangeEvent, Component, KeyboardEvent, ReactNode } from "react";

interface IProps {
  add(content: string): void;
}

interface IState {
  content: string;
}

export default class Add extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { content: "" };
  }

  add = (): void => {
    if (!this.state.content) return;
    this.props.add(this.state.content);
    this.setState({ content: "" });
  };

  render(): ReactNode {
    return (
      <div className="flex items-center gap-2 p-1 border-b-4 border-black border-double">
        <label htmlFor="todo-content">Todo :</label>
        <input
          className="flex-1 border rounded border-gray-500"
          type="text"
          id="todo-content"
          value={this.state.content}
          onInput={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
            // console.log(value);
            this.setState({ content: value });
          }}
          onKeyDown={({ key }: KeyboardEvent<HTMLInputElement>) => {
            if (key == "Enter") {
              this.add();
            }
          }}
        />
        <button
          className={[
            "border",
            "border-gray-400",
            "rounded",
            "p-1",
            "px-5",
            "select-none", // user-select: none;
          ].join(" ")}
          onClick={this.add}
        >
          추가
        </button>
      </div>
    );
  }
}
