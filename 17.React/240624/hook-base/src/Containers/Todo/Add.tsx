import { ChangeEvent, FC, useCallback, useState } from "react";
import AddComp from "../../Components/Todo/Add";

export interface IProps {
  addItem(content: string, priority: number, limit: string): void;
}

const Add: FC<IProps> = ({ addItem }) => {
  const [content, setContent] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [limit, setLimit] = useState<string>("");

  const changeContent = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setContent(value);
    },
    []
  );

  const changePriority = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      const temp = +value;
      if (!isNaN(temp)) setPriority(temp);
      // e 무리수 << 숫자
      // typeof NaN == number
    },
    []
  );

  const changeLimit = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setLimit(value);
    },
    []
  );

  const submit = () => {
    addItem(content, priority, limit);
    setContent("");
    setPriority(0);
    setLimit("");
  };

  return (
    <AddComp
      content={content}
      priority={priority}
      limit={limit}
      changeContent={changeContent}
      changePriority={changePriority}
      changeLimit={changeLimit}
      submit={submit}
    />
  );
};

export default Add;
