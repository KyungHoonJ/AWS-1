import { ReactNode } from "react";

interface IProps {
  type?: string;
  onClick?: (e: MouseEvent) => void;
  children: ReactNode;
}

const Button = ({ children, type = "primary" }: IProps): JSX.Element => {
  switch (type) {
    case "warning":
      type = "red";
      break;
    case "primary":
    default:
      type = "blue";
  }
  return (
    <button
      className={`font-bold py-2 px-4 rounded bg-${type}-500 text-white hover:bg-${type}-700`}
    >
      {children}
    </button>
  );
};

export default Button;
