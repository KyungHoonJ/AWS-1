import { useState } from "react";
import List, { ITitle } from "../List";

export interface IBoard {
  num: number;
  title: string;
  user: string;
  createdAt: Date;
}

const Board = (): JSX.Element => {
  const [titleList, setTitleList] = useState<ITitle<IBoard>[]>([
    { key: "num" as keyof IBoard, name: "No." },
    { key: "title" as keyof IBoard, name: "제목" },
    { key: "user" as keyof IBoard, name: "작성자" },
    { key: "createdAt" as keyof IBoard, name: "작성자" },
  ]);
  const [list, setList] = useState<IBoard[]>([
    { num: 1, title: "testing", user: "jkh", createdAt: new Date() },
  ]);

  return (
    <div>
      <List<IBoard> list={list} titleList={titleList} />
    </div>
  );
};

export default Board;
