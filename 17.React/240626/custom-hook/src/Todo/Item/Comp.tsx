import { FC } from "react";
import { Todo } from "../../hooks/todoList";

export interface IProps {
  todo: Todo;
  removeTodo: () => void;
  completeTodo: () => void;
  idx: number;
}

const Item: FC<IProps> = ({ todo, removeTodo, completeTodo, idx }) => {
  return (
    <div className="flex justify-between items-center gap-2 p-1 border-b border-dashed border-black">
      <div>{todo.priority}</div>
      <div className="flex-1">{todo.content}</div>
      <div>{todo.createdAt}</div>
      <div>{todo.limit}</div>
      <div>
        <label
          htmlFor={`item-${idx}`}
          className="border border-gray-400 rounded p-1 px-2 has-[:checked]:bg-yellow-300 has-[:checked]:text-red-700 select-none"
        >
          {todo.isComplete ? "완료" : "진행중"}
          <input
            id={`item-${idx}`}
            className="hidden"
            type="checkbox"
            checked={todo.isComplete}
            onChange={completeTodo}
          />
        </label>
      </div>
      <button
        className="border border-gray-400 rounded bg-gray-200 p-1 px-2 select-none"
        onClick={removeTodo}
      >
        삭제
      </button>
    </div>
  );
};

export default Item;
