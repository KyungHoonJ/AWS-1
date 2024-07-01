import { useTodoContext } from "../context/TodoProvider";
import Item from "./Item";

const List = (): JSX.Element => {
  const {
    state: { todoList },
  } = useTodoContext();
  return (
    <div>
      {todoList.map((_, idx: number) => (
        <Item key={idx} idx={idx} />
      ))}
    </div>
  );
};

export default List;
