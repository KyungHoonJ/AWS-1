import Component from "./lib/Component";

export default class App extends Component {
  constructor(parent: HTMLElement) {
    super(parent);
    this.setState({ test: 1 });
  }

  override componentDidMount(): void {
    console.log("now test");
  }
  // overloading : 적용방법 찾아볼 것
  // componentDidMount(str: string): string {
  //   console.log("now test");
  //   return str;
  // }

  override componentDidUpdate(): void {
    console.log("testing update");
    setTimeout(() => {
      this.setState({ test: this.state.test + 1 });
      //   this.state.test += 1;
    }, 1000);
  }

  override render() {
    console.log(this.state);
    return `<div>
                ${this.state?.test}
            </div>`;
  }
}
