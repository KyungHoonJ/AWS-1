type State = {
  [key: string]: any;
};

export interface IComponent {
  setState(newState: State): void;
  componentDidMount(): void;
  componentDidUpdate(): void;
  componentWillUnmount(): void;
  render(): string;
}
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
export default class Component {
  protected state: State;
  private parent: HTMLElement;
  // React에서 가장 기초되는 단위 << 어떤 단위?
  // 엘리먼트(영역)
  // React의 중요 개념 : VDOM, state

  constructor(parent: HTMLElement) {
    this.parent = parent;
    this.rerender();
    this.componentDidMount();
  }
  // 필요한 메서드는?
  setState(newState: State): void {
    this.state = newState;
    this.rerender();
    this.componentDidUpdate();
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
