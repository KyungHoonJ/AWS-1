import { FC } from "react";
import { Todo as ITodo } from "../hooks/todoList";
import Item from "./Item";

export interface IProps {
  list: Array<ITodo>;
  addTodo: (todo: ITodo) => void;
  removeTodo: (todo: ITodo) => void;
  completeTodo: (todo: ITodo) => void;
}

const Todo: FC<IProps> = ({ list, addTodo, removeTodo, completeTodo }) => {
  return (
    <div>
      {list.map((item: ITodo, idx: number) => (
        <Item
          key={idx}
          todo={item}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
          idx={idx}
        />
      ))}
    </div>
  );
};

export default Todo;
