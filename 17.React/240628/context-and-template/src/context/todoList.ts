import { createContext } from "react";

export interface ITodo {
  num: number;
  content: string;
  priority: number;
  limit: string;
}

export interface ITodoContext {
  list: ITodo[];
  addList: (todo: ITodo) => void;
}

export const TodoContext = createContext<ITodoContext | undefined>(undefined);
// createContext -> BrowserRouter 같이 컴포넌트를 하나 생성해준다.(Provider)
// Provider 컴포넌트의 자식들에서는 해당 훅(Context)를 사용할 수 있다.
