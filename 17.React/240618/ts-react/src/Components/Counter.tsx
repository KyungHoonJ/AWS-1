import { Component, ReactNode } from "react";

export default class Counter extends Component<
  {},
  {
    count: number;
  }
> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 1 };
  }

  handlerCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render(): ReactNode {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        {this.state.count}
      </button>
    );
    // return <button onClick={this.handlerCount}>{this.state.count}</button>;
  }
}
