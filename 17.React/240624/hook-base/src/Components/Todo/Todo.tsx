import { FC } from "react";
import List from "./List";
import { Todo as TodoItem } from "../../lib/Todo";
import Add from "../../Containers/Todo/Add";

export interface ITodoProps {
  list: TodoItem[];
  complete(idx: number): void;
  removeItem(idx: number): void;
}

export interface IProps extends ITodoProps {
  addItem(content: string, priority: number, limit: string): void;
}

const Todo: FC<IProps> = ({ list, complete, removeItem, addItem }) => {
  return (
    <div>
      <Add addItem={addItem} />
      <List list={list} complete={complete} removeItem={removeItem} />
    </div>
  );
};

export default Todo;
