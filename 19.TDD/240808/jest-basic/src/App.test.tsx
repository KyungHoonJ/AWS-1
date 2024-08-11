import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("full test", () => {
  test("renders learn react link", () => {
    render(<App />);
    // console.log(screen);
    const linkElement = screen.getByText(/리액트 테스트중/i);
    // console.log(linkElement);
    expect(linkElement).toBeInTheDocument();
    // expect : 인자를 테스트하겠다.
    // toBeInTheDocument : 문서 안에 있는가?
  });

  test("list test", () => {
    const tempData = [1, 2, 3];
    render(<App list={tempData} />);

    tempData.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
