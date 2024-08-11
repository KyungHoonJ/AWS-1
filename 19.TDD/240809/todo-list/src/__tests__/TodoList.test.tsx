import { render, screen, fireEvent } from "@testing-library/react";

import TodoList from "../components/TodoList";

describe("Test Todo List", () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test("Render Todo List", () => {
    // render(<TodoList />);
    const titleElem = screen.getByText(/Todo List/i);
    expect(titleElem).toBeInTheDocument();
    expect(titleElem.tagName).toBe("H1");
  });

  test("Include Input Element", () => {
    // render(<TodoList />);
    const inputElem = screen.getByRole("textbox");
    expect(inputElem).toBeInTheDocument();
  });

  test("Input Text", () => {
    // render(<TodoList />);
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "input test" } });
    expect(inputElem.value).toEqual("input test");
  });

  test("Include Add Button", () => {
    const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    expect(buttonElem).toBeInTheDocument();
  });

  test("Add New Todo", () => {
    // 작성해보자
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "first Todo" } });
    const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    fireEvent.click(buttonElem);

    const listItemElem = screen.getByText("first Todo");
    expect(listItemElem).toBeInTheDocument();
    expect(listItemElem.tagName).toBe("LI");

    const listItemElem2 = screen.getByRole("listitem");
    expect(listItemElem2).toHaveTextContent("first Todo");
  });
});
