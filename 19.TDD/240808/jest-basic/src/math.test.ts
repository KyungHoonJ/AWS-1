import { add } from "./math";

describe("test math", () => {
  it("test add method", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(3, 2)).toEqual(5);
  });
});
