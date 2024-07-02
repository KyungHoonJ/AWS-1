import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
}

// class Todo {
//   private id;
//   private content;
//   private isComplete;
//   constructor(content: string) {
//     this.id = 1;
//     this.content = content;
//     this.isComplete = false;
//   }

//   getId() {
//     return this.id;
//   }
//   getContent() {
//     return this.content;
//   }
//   getComplete() {
//     return this.isComplete;
//   }
//   setComplete(isComplete: boolean) {
//     this.isComplete = isComplete;
//   }
// }

// atom : state
export const todoListState = atom<ITodo[]>({
  key: "todoList",
  default: [],
});
// initialState
// useState랑 사용법이 거의 흡사

const todoFilterState = atom<string>({
  key: "todoFilterState",
  default: "all",
});

export const todoList = selector<ITodo[]>({
  key: "todoList",
  get: ({}) => {
    return [];
  },
});

// selector : reducer + action?
export const todoCount = selector<number>({
  key: "todoCount",
  get: ({ get }) => {
    const list = get(todoListState);
    const filter = get(todoFilter);
    switch (filter) {
      case "complete":
        return list.filter((item) => item.isComplete).length;
      case "progress":
        return list.filter((item) => !item.isComplete).length;
      case "all":
      default:
        return list.length;
    }
  },
  //   set:()
});

export const todoFilter = selector<string>({
  key: "todoFilter",
  get: ({ get }) => {
    return get(todoFilterState);
  },
  set: ({ set }, value = "all") => {
    set(todoFilterState, value);
  },
});
