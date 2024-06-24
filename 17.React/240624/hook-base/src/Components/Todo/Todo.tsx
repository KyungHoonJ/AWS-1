import { FC } from "react";
import List from "./List";
import { Todo as TodoItem } from "../../lib/Todo";

export interface IProps {
  list: TodoItem[];
  complete(idx: number): void;
}

const Todo: FC<IProps> = ({ list, complete }) => {
  return (
    <div>
      <List list={list} complete={complete} />
    </div>
  );
};

export default Todo;
