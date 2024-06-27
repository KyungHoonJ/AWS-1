// Custom Hook
// use로 시작하는 식별자를 사용한다.
// 독립적이라 다른 훅을 가져다 State로 사용하지 못한다.
// HTML 문법이 포함되지 못한다.

import { useCallback, useState } from "react";

export interface Todo {
  content: string;
  isComplete: boolean;
  priority: number;
  createdAt: string;
  limit: string;
}

// interface useTodo {
//   isComplete: boolean;
//   complete: () => void;
// }

// const useTodo = () => {
//   const [isComplete, setComplete] = useState<boolean>(false);
//   const complete = useCallback(() => {
//     setComplete(true);
//   }, []);

//   return { isComplete, complete };
// };

const useTodoList = () => {
  const [list, setList] = useState<Array<Todo>>([
    // useTodo(),
    {
      content: "test",
      isComplete: false,
      priority: 1,
      createdAt: "2024-06-26",
      limit: "2024-06-27",
    },
  ]);

  const addTodo = useCallback((todo: Todo) => {
    setList((list: Array<Todo>) => [...list, todo]);
  }, []);

  const removeTodo = useCallback((todo: Todo) => {
    setList((list: Array<Todo>) => list.filter((item) => item !== todo));
  }, []);

  const completeTodo = useCallback((todo: Todo) => {
    setList((list: Array<Todo>) =>
      list.map((item: Todo) =>
        item === todo ? { ...todo, isComplete: true } : item
      )
    );
  }, []);

  return { list, addTodo, removeTodo, completeTodo };
};

export default useTodoList;
