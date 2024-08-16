import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import TodoList from "../components/TodoList";
import instance from "../lib/axios";

const mock = new MockAdapter(instance);
const client = new QueryClient();

describe("Test Todo List", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={client}>
        <TodoList />
      </QueryClientProvider>
    );
  });

  test("Render Todo List", async () => {
    const data = [{ id: 1, title: "test todo list", isCompleted: false }];
    mock.onGet("/todo").reply(200, data);

    // render(<TodoList />);
    const titleElem = screen.getByText(/now Loading/i);
    expect(titleElem).toBeInTheDocument();
    expect(titleElem.tagName).toBe("DIV");

    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    expect(screen.getByText(/test todo list/i)).toBeInTheDocument();
  });

  // test("Include Input Element", () => {
  //   // render(<TodoList />);
  //   const inputElem = screen.getByRole("textbox");
  //   expect(inputElem).toBeInTheDocument();
  // });

  // test("Input Text", () => {
  //   // render(<TodoList />);
  //   const inputElem: HTMLInputElement = screen.getByRole("textbox");
  //   fireEvent.change(inputElem, { target: { value: "input test" } });
  //   expect(inputElem.value).toEqual("input test");
  // });

  // test("Include Add Button", () => {
  //   const buttonElem = screen.getByRole("button", { name: "Add Todo" });
  //   expect(buttonElem).toBeInTheDocument();
  // });

  // test("Add New Todo", () => {
  //   // 작성해보자
  //   const inputElem: HTMLInputElement = screen.getByRole("textbox");
  //   fireEvent.change(inputElem, { target: { value: "first Todo" } });
  //   const buttonElem = screen.getByRole("button", { name: "Add Todo" });
  //   fireEvent.click(buttonElem);

  //   const listItemElem = screen.getByText("first Todo");
  //   expect(listItemElem).toBeInTheDocument();
  //   expect(listItemElem.tagName).toBe("LI");

  //   const listItemElem2 = screen.getByRole("listitem");
  //   expect(listItemElem2).toHaveTextContent("first Todo");
  // });
});
