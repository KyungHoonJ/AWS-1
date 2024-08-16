import { ChangeEvent, useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getList, Todo as ITodo } from "../lib/todoAxios";

const TodoList = (): JSX.Element => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["get", "/todo"],
    queryFn: getList,
  });

  if (isLoading) return <div>now Loading</div>;
  if (isError) return <div>{error.message}</div>;

  // const [list, setList] = useState<string[]>([]);
  // const [inputValue, setInputValue] = useState("");

  // const onChange = useCallback(
  //   ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
  //     setInputValue(value);
  //   },
  //   []
  // );

  // const addTodo = useCallback(() => {
  //   setList((state) => [...state, inputValue]);
  //   setInputValue("");
  // }, [inputValue]);

  return (
    <div>
      <h1>Todo List</h1>
      {/* <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={addTodo}>Add Todo</button>
      </div> */}
      <ul>
        {data?.map((item: ITodo, idx: number) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
