import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import TodoList from "../components/TodoList";
import instance from "../lib/axios";

const mock = new MockAdapter(instance);
const client = new QueryClient();

describe("Test Todo List", () => {
  beforeEach(() => {
    const data = { id: 1, title: "test todo list", isCompleted: false };
    mock.onGet("/todo").reply(200, [data]);
    mock.onPost("/todo", { title: "test todo list" }).reply(200, data);

    render(
      <QueryClientProvider client={client}>
        <TodoList />
      </QueryClientProvider>
    );
  });

  test("Render Todo List", async () => {
    const titleElem = screen.getByText(/now Loading/i);
    expect(titleElem).toBeInTheDocument();
    expect(titleElem.tagName).toBe("DIV");

    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    expect(screen.getByText(/test todo list/i)).toBeInTheDocument();
  });

  test("Include Input Element", async () => {
    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    const inputElem = screen.getByRole("textbox");
    expect(inputElem).toBeInTheDocument();
  });

  test("Input Text", async () => {
    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "input test" } });
    expect(inputElem.value).toEqual("input test");
  });

  test("Include Add Button", () => {
    const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    expect(buttonElem).toBeInTheDocument();
  });

  test("Add New Todo", async () => {
    // 작성해보자
    const data = { id: 1, title: "test todo list", isCompleted: false };
    mock
      .onGet("/todo")
      .reply(200, [data, { id: 1, title: "first Todo", isCompleted: false }]);

    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
    });
    const inputElem: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(inputElem, { target: { value: "test todo list" } });
    const buttonElem = screen.getByRole("button", { name: "Add Todo" });
    fireEvent.click(buttonElem);

    await waitFor(() => {
      expect(screen.getByText("Todo List")).toBeInTheDocument();
      expect((screen.getByRole("textbox") as HTMLInputElement).value).toEqual(
        ""
      );
    });

    const listItemElem = screen.getByText("first Todo");
    expect(listItemElem).toBeInTheDocument();
    expect(listItemElem.tagName).toBe("LI");
  });
});
