import { useCallback, useMemo } from "react";
import { useTodoContext } from "../context/TodoProvider";
import Button from "./public/Button";

interface IProps {
  idx: number;
}

const Item = ({ idx }: IProps): JSX.Element => {
  const {
    state: { todoList },
    dispatch,
    toggle,
  } = useTodoContext();

  const item = useMemo(() => {
    return todoList[idx];
  }, [todoList]);

  // const toggleComplete = useCallback(() => {
  //   dispatch({ type: "TOGGLETODO", payload: { id: item.id } });
  // }, [todoList]);
  const removeTodo = useCallback(() => {
    dispatch({ type: "REMOVETODO", payload: { id: item.id } });
  }, [todoList]);

  return (
    <div>
      <div>{item.id}</div>
      <div>{item.title}</div>
      <div>{item.content}</div>
      <div>{item.isComplete ? "완료" : "진행중"}</div>
      <Button onClick={() => toggle(item.id)}>완료</Button>
      <Button type="warning" onClick={removeTodo}>
        삭제
      </Button>
    </div>
  );
};

export default Item;
