import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { addTodo } from "../../lib/todoAxios";

const AddTodo = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");
  const client = useQueryClient();

  const onChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setInputValue(value);
    },
    []
  );

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async () => {
      const todo = await addTodo({ title: inputValue });
      return todo;
    },
    onSuccess: () => {
      setInputValue("");
      client.invalidateQueries({ queryKey: ["get", "todo"] });
    },
    onError: () => {
      console.log("에러 발생");
    },
  });

  if (isPending) return <div>now Pending</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button
        onClick={() => {
          mutate();
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
