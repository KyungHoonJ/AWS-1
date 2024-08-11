import { ChangeEvent, useCallback, useState } from "react";

const TodoList = (): JSX.Element => {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const onChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setInputValue(value);
    },
    []
  );

  const addTodo = useCallback(() => {
    setList((state) => [...state, inputValue]);
    setInputValue("");
  }, [inputValue]);

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" value={inputValue} onChange={onChange} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {list.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
