import {
  Dispatch,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

export interface Todo {
  id: number;
  title: string;
  content: string;
  isComplete: boolean;
}

export interface TodoListState {
  todoList: Todo[];
}

const initialState: TodoListState = {
  todoList: [],
};
// initialize : 초기화 / initialState : 초기값

// interface Test {
//   content: "test" | "testing";
// }

type Action =
  | {
      type: "ADDTODO";
      // payload: Todo; //데이터?
      payload: { title: string; content: string }; //데이터?
    }
  | {
      type: "REMOVETODO";
      payload: { id: number }; //데이터?
    }
  | {
      type: "TOGGLETODO";
      payload: { id: number }; //데이터?
    };

// interface Action2 {
//   type: "ADDTODO" | "REMOVETODO" | "TOGGLETODO";
//   payload: Todo;
// }

let nowId = 0;
const reducer = (state: TodoListState, action: Action): TodoListState => {
  switch (action.type) {
    case "ADDTODO":
      nowId++;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { ...action.payload, id: nowId, isComplete: false },
        ],
      };
    //   break;
    case "REMOVETODO":
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo: Todo) => todo.id !== action.payload.id
        ),
      };
    case "TOGGLETODO":
      return {
        ...state,
        todoList: state.todoList.map((todo: Todo) => {
          if (todo.id !== action.payload.id) return todo;
          else return { ...todo, isComplete: !todo.isComplete };
        }),
      };
    default:
      return state;
  }
  //   if (action.type == "ADDTODO") {
  //     return { ...state, todoList: [...state.todoList, action.payload] };
  //   }
  //   if (action.type == "REMOVETODO") {
  //     return {
  //       ...state,
  //       todoList: state.todoList.filter(
  //         (todo: Todo) => todo.id !== action.payload.id
  //       ),
  //     };
  //   }
  //   if (action.type == "TOGGLETODO") {
  //     return {
  //       ...state,
  //       todoList: state.todoList.map((todo: Todo) => {
  //         if (todo.id !== action.payload.id) return todo;
  //         else return { ...todo, isComplete: !todo.isComplete };
  //       }),
  //     };
  //   }
  //   return state;
};

interface TodoContextProps {
  state: TodoListState;
  dispatch: Dispatch<Action>;
  toggle: (id: number) => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggle = useCallback((id: number) => {
    dispatch({ type: "TOGGLETODO", payload: { id } });
  }, []);

  return (
    <TodoContext.Provider value={{ state, dispatch, toggle }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("now loading");
  }
  return context;
};

// export default TodoContext;
