import { MouseEvent, ReactNode } from "react";

interface TYPES {
  warning: string;
  default: string;
}
const TYPES = {
  warning: "bg-red-500 hover:bg-red-700",
  default: "bg-blue-500 hover:bg-blue-700",
};

interface IProps {
  type?: keyof TYPES;
  onClick?: (e: MouseEvent) => void;
  children: ReactNode;
}

const Button = ({
  children,
  type = "default",
  onClick = (e: MouseEvent) => {},
}: IProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`font-bold py-2 px-4 rounded text-white ${TYPES[type]}`}
    >
      {children}
    </button>
  );
};

export default Button;
