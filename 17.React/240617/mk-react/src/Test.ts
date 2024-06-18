interface ITest1 {
  a: number;
}

interface ITest2 {
  b: string;
}

interface ITest3 {
  c: Function;
}

export interface ITest extends ITest1, ITest2, ITest3 {}

export default class Test implements ITest {
  a = 1;
  b = "1";
  c = () => {};
}

class Test2 implements ITest1, ITest2 {
  a = 1;
  b = "1";
}

// class Test3 extends Test, Test2{

// }
