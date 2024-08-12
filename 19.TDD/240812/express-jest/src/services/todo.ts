interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

const todoList: Todo[] = [];
let todoId = 1;

export const add = (title: string) => {
  if (title?.length) {
    todoList.push({
      id: todoId++,
      title,
      isCompleted: false,
    });
    return todoList[todoList.length - 1];
  } else {
    throw new Error("plz input title");
  }
};
