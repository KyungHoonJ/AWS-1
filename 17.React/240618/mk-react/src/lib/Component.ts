type State = {
  [key: string]: any;
  // name: string;
};

export interface IComponent {
  setState(newState: State): void;
  componentDidMount(): void;
  componentDidUpdate(): void;
  componentWillUnmount(): void;
  render(): string;
}

export default class Component {
  protected state: State = {};
  private parent: HTMLElement;

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.rerender();
    this.componentDidMount();
  }

  setState(newState: State): void {
    let isNewState = false;
    Object.keys(newState).forEach((key: keyof State) => {
      if (this.state[key] != newState[key]) {
        isNewState = true;
      }
    });
    if (isNewState) {
      this.state = { ...this.state, ...newState };
      this.rerender();
      this.componentDidUpdate();
    }
  }

  componentDidMount(): void {}
  componentDidUpdate(): void {}
  componentWillUnmount(): void {}
  render(): string {
    return "";
  }

  private rerender(): void {
    this.parent.innerHTML = this.render();
  }
}
