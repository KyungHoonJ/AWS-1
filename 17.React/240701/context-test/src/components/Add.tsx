import { ChangeEvent, useCallback, useState } from "react";
import Button from "./public/Button";
import { useTodoContext } from "../context/TodoProvider";

const Add = (): JSX.Element => {
  // const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  // const changeId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   setId(+e.target.value);
  // }, []);
  const changeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);
  const changeContent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }, []);

  const { dispatch } = useTodoContext();
  const addTodo = () => {
    dispatch({
      type: "ADDTODO",
      payload: {
        // id,
        title,
        content,
        // isComplete: false,
      },
    });
  };

  return (
    <div>
      {/* <input type="text" value={id} onInput={changeId} placeholder="id" /> */}
      <input
        type="text"
        value={title}
        onInput={changeTitle}
        placeholder="title"
      />
      <input
        type="text"
        value={content}
        onInput={changeContent}
        placeholder="content"
      />
      <Button onClick={addTodo}>추가</Button>
    </div>
  );
};

export default Add;
