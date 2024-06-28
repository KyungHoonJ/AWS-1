import { ITitle } from ".";

const Item = <T,>({
  item,
  titleList,
}: {
  item: T;
  titleList: ITitle<T>[];
}): JSX.Element => {
  return (
    <li>
      <ul className="flex justify-between">
        {titleList.map(({ key }: ITitle<T>, idx: number) => (
          <li key={`item-${idx}`}>{`${item[key]}`}</li>
        ))}
      </ul>
    </li>
  );
};

export default Item;
