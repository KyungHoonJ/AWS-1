import { FC, useCallback, useState } from "react";
import { Todo as TodoItem } from "../../lib/Todo";
import TodoComp from "../../Components/Todo/Todo";

export interface IProps {}

const Todo: FC<IProps> = ({}) => {
  const [list, setList] = useState<TodoItem[]>([
    new TodoItem("test", 1, "2024-06-30"),
  ]);
  /*
  const complete = useCallback((idx: number) => {
    list[idx].setComplete();
    setList([...list]);
  }, [list]);
  const complete = (idx: number) => {
    list[idx].setComplete();
    setList([...list]);
  }
  // 이 두 메서드는 다를 바가 없다.
  // 매 render 마다 새롭게 초기화된다.
  */
  const complete = useCallback((idx: number) => {
    setList((list: TodoItem[]) => {
      list[idx].setComplete();
      return [...list];
    });
    // complete 메서드가 초기화되는 시기 언제? => Mount
  }, []);

  const removeItem = useCallback((idx: number) => {
    setList((list: TodoItem[]) => {
      return list.filter((_, i: number) => i != idx);
    });
  }, []);

  const addItem = useCallback(
    (content: string, priority: number, limit: string) => {
      setList((list: TodoItem[]) => [
        ...list,
        new TodoItem(content, priority, limit),
      ]);
    },
    []
  );

  return (
    <TodoComp
      list={list}
      complete={complete}
      removeItem={removeItem}
      addItem={addItem}
    />
  );
};

export default Todo;
