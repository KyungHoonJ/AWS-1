class Test<T, G> {
  list: T[] = [];
  temp1: T;
  constructor(temp1: T) {
    this.temp1 = temp1;
  }
  setTemp(temp1: T) {
    this.temp1 = temp1;
  }
}

new Test<number, string>(1);

export {};
