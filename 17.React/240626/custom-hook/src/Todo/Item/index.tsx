import { FC, useMemo } from "react";
import Comp from "./Comp";
import { Todo } from "../../hooks/todoList";

export interface IProps {
  todo: Todo;
  removeTodo: (todo: Todo) => void;
  completeTodo: (todo: Todo) => void;
  idx: number;
}

const Item: FC<IProps> = ({ todo, removeTodo, completeTodo, idx }) => {
  const createdAt = useMemo(
    () => todo.createdAt.slice(2).replace(/-/g, ""),
    []
  );
  const limit = useMemo(() => todo.limit + "까지", []);

  return (
    <Comp
      todo={{ ...todo, createdAt, limit }}
      removeTodo={() => removeTodo(todo)}
      completeTodo={() => completeTodo(todo)}
      idx={idx}
    />
  );
};

export default Item;
