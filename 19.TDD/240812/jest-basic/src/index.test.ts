import { sum } from "./index";

describe("test Math", () => {
  test("test sum", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(3, 4)).toBe(7);
  });
});
