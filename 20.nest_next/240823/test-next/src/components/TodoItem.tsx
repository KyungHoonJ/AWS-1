import React from "react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <span onClick={() => toggleTodo(todo.id)} style={{ cursor: "pointer" }}>
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
