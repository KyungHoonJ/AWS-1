import { FC } from "react";
import { Todo as TodoItem } from "../../lib/Todo";
import Item from "./Item";

export interface IProps {
  list: Array<TodoItem>;
  complete(idx: number): void;
}

const List: FC<IProps> = ({ list, complete }) => {
  return (
    <div>
      {list
        // .filter((item) => !item.getIsComplete())
        .map((item: TodoItem, idx: number) => (
          <Item
            key={idx}
            item={item}
            idx={idx}
            complete={() => complete(idx)}
          />
        ))}
    </div>
  );
};

export default List;
