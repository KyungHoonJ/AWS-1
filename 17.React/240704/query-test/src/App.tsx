import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
}
const keys = ["todo"];
const App = (): JSX.Element => {
  // const Todo = (): JSX.Element => {
  //   return <div>todo</div>;
  // };
  const [page, setPage] = useState(1);
  const { data, isError, isPending } = useQuery<ITodo[]>({
    // /api/todo/:page get (리스트)
    // /api/todo post (할일 추가)
    // /api/todo/:id post (수정)
    // /api/todo/item/:id get (아이템 하나)
    queryKey: "api/todo/1".split("/"),
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8001/api/todo/${page}`
      );
      console.log(data);
      // throw new Error("test");
      return data;
    },
    // refetchInterval: 1000,
    // refetchOnWindowFocus: false, // default: true
  });
  // const { data, isError, isPending, mutate } = useMutation({
  //   mutationKey: ["todo", "list"],
  //   mutationFn: async (page: number) => {
  //     const { data } = await axios.get(
  //       `http://localhost:8001/api/todo/${page}`
  //     );
  //     console.log(data);
  //     // throw new Error("test");
  //     return data as ITodo[];
  //   },
  // });
  // useEffect(() => {
  //   mutate(page);
  // }, [page]);
  console.log(data);
  // const query = useQuery<ITodo[]>({
  //   queryKey: [...keys, "add"],
  //   queryFn: async () => {
  //     const { data } = await axios.get("http://localhost:8001/api/todo");
  //     console.log(data);
  //     // throw new Error("test");
  //     return data;
  //   },
  // });

  if (isPending) return <h1>now Loading</h1>;
  if (isError) return <h1>plz retry</h1>;

  return (
    <div>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        up
      </button>
      {/* <Todo></Todo> */}
      {data?.map((item: ITodo) => (
        <div>{item.content}</div>
      ))}
    </div>
  );
};

export default App;
