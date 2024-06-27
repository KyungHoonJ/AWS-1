import { FC, useState } from "react";
import Comp, { IBoard } from "./Component";

const Board: FC = () => {
  const [list, setList] = useState<IBoard[]>([
    {
      id: 1,
      title: "성민아 오늘도 편점?",
      user: "정경훈",
      createdAt: new Date(),
      likeCount: 10,
      disCount: 20,
    },
    {
      id: 1,
      title: "성민아 오늘도 편점?",
      user: "정경훈",
      createdAt: new Date(),
      likeCount: 10,
      disCount: 20,
    },
    {
      id: 1,
      title: "성민아 오늘도 편점?",
      user: "정경훈",
      createdAt: new Date(),
      likeCount: 10,
      disCount: 20,
    },
    {
      id: 1,
      title: "성민아 오늘도 편점?",
      user: "정경훈",
      createdAt: new Date(),
      likeCount: 10,
      disCount: 20,
    },
    {
      id: 1,
      title: "성민아 오늘도 편점?",
      user: "정경훈",
      createdAt: new Date(),
      likeCount: 10,
      disCount: 20,
    },
  ]);
  return <Comp list={list} />;
};

export default Board;
