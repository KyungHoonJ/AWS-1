import { ChangeEvent, useCallback, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, getList, Todo as ITodo } from "../lib/todoAxios";

const TodoList = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");

  const client = useQueryClient();
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["get", "/todo"],
    queryFn: getList,
  });

  const onChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setInputValue(value);
    },
    []
  );

  const { mutate } = useMutation({
    mutationFn: async () => {
      console.log("???");
      await addTodo({ title: inputValue });
    },
    onSuccess: () => {
      setInputValue("");
      client.invalidateQueries({ queryKey: ["get", "/todo"] });
    },
    onError: () => {
      console.log("에러 발생");
    },
  });

  // const addHandler = useCallback(() => {
  //   // setList((state) => [...state, inputValue]);
  //   addTodo({ title: inputValue });
  //   setInputValue("");
  // }, [inputValue]);

  if (isLoading) return <div>now Loading</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={() => mutate}>Add Todo</button>
      </div>
      <ul>
        {data?.map((item: ITodo, idx: number) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
