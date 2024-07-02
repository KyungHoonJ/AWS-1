import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoCount, todoFilter, todoList, todoListState } from "./context/todo";
import { useEffect } from "react";

const App = (): JSX.Element => {
  // const [list, setList] = useRecoilState(todoList);
  const list = useRecoilValue(todoList);
  const setList = useSetRecoilState(todoListState);
  console.log(list);
  const listCount = useRecoilValue(todoCount);
  const [filter, setFilter] = useRecoilState(todoFilter);

  useEffect(() => {
    setList([
      { id: 1, content: "test", isComplete: false },
      { id: 2, content: "test2", isComplete: false },
      { id: 3, content: "test3", isComplete: false },
      { id: 4, content: "test4", isComplete: true },
      { id: 5, content: "test5", isComplete: false },
    ]);
  }, []);

  const changeFilter = () => {
    switch (filter) {
      case "complete":
        setFilter("progress");
        break;
      case "progress":
        setFilter("all");
        break;
      case "all":
      default:
        setFilter("complete");
    }
  };

  return (
    <div>
      <button onClick={changeFilter}>{filter}</button> : {listCount}
      <div>
        {list.map((item) => (
          <div key={item.id}>{item.content}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
