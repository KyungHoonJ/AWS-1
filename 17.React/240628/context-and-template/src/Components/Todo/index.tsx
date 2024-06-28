import { useContext, useMemo, useState } from "react";
import List, { ITitle } from "../List";
import { ITodo, ITodoContext, TodoContext } from "../../context/todoList";

// interface ITodo {
//   num: number;
//   content: string;
//   priority: number;
//   limit: string;
// }

const Todo = (): JSX.Element => {
  // const [list, setList] = useState<ITodo[]>([]);
  const { list } = useContext(TodoContext) as ITodoContext;
  const titleList: ITitle<ITodo>[] = useMemo(
    () => [
      { key: "num" as keyof ITodo, name: "No." },
      { key: "content" as keyof ITodo, name: "할 일", isStrech: true },
      { key: "limit" as keyof ITodo, name: "기간제한" },
    ],
    []
  );

  return (
    <div>
      <List<ITodo> list={list} titleList={titleList} />
    </div>
  );
};

export default Todo;
