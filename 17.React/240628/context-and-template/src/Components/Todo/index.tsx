import { useMemo, useState } from "react";
import List, { ITitle } from "../List";

interface ITodo {
  num: number;
  content: string;
  priority: number;
  limit: string;
}

const Todo = (): JSX.Element => {
  const [list, setList] = useState<ITodo[]>([]);
  const titleList: ITitle<ITodo>[] = useMemo(
    () => [{ key: "num" as keyof ITodo, name: "No." }],
    []
  );
  return (
    <div>
      <List list={list} titleList={titleList} />
    </div>
  );
};

export default Todo;
