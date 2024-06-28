import { useContext, useEffect, useState } from "react";
import List, { ITitle } from "../List";
import { ITodoContext, TodoContext } from "../../context/todoList";

export interface IBoard {
  num: number;
  title: string;
  user: string;
  createdAt: Date;
}

const Board = (): JSX.Element => {
  const [titleList, setTitleList] = useState<ITitle<IBoard>[]>([
    { key: "num" as keyof IBoard, name: "No." },
    { key: "title" as keyof IBoard, name: "제목", isStrech: true },
    { key: "user" as keyof IBoard, name: "작성자" },
    { key: "createdAt" as keyof IBoard, name: "작성일자" },
  ]);

  const [list, setList] = useState<IBoard[]>([
    { num: 1, title: "testing", user: "jkh", createdAt: new Date() },
  ]);

  const context = useContext(TodoContext) as ITodoContext;
  const addList = context.addList;
  const todoList = context.list;

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  useEffect(() => {
    addList({ num: 2, content: "bsaer", limit: "240630", priority: 3 });
  }, []);

  return (
    <div>
      <List<IBoard> list={list} titleList={titleList} />
    </div>
  );
};

export default Board;
