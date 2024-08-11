import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
}
const App = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const { data, isError, isPending } = useQuery<ITodo[]>({
    queryKey: "api/todo/1".split("/"),
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:3080/api/todo/${page}`
      );
      console.log(data);
      return data;
    },
  });

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
      {data?.map((item: ITodo) => (
        <div>{item.content}</div>
      ))}
    </div>
  );
};

export default App;
