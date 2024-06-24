import { ChangeEvent, FC } from "react";

export interface IProps {
  content: string;
  priority: number;
  limit: string;
  changeContent({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  changePriority({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  changeLimit({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  submit(): void;
}

const Add: FC<IProps> = ({
  content,
  priority,
  limit,
  changeContent,
  changePriority,
  changeLimit,
  submit,
}) => {
  return (
    <div className="flex items-center gap-2 p-1 border-b-4 border-black border-double">
      <label htmlFor="todo-priority">Priority :</label>
      <input
        className="border rounded border-gray-500"
        type="number"
        id="todo-priority"
        value={priority}
        onInput={changePriority}
      />
      <input
        className="flex-1 border rounded border-gray-500"
        type="text"
        value={content}
        onInput={changeContent}
        placeholder="Todo"
      />
      <input
        className="border rounded border-gray-500"
        type="date"
        value={limit}
        onInput={changeLimit}
      />
      <button
        className={
          "border border-gray-400 rounded p-1 px-5 bg-blue select-none"
        }
        onClick={submit}
      >
        추가
      </button>
    </div>
  );
};

export default Add;
