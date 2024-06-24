import { FC } from "react";
import { Todo as TodoItem } from "../../lib/Todo";
import Item from "./Item";
import { ITodoProps } from "./Todo";

export interface IProps extends ITodoProps {}

const List: FC<IProps> = ({ list, complete, removeItem }) => {
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
            removeItem={() => removeItem(idx)}
          />
        ))}
    </div>
  );
};

export default List;
