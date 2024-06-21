// export default function Test(): JSX.Element {
//   return <div>now Testing</div>;
// }

import { FC, useEffect, useState } from "react";

const Test: FC = () => {
  const [test, _] = useState<string>("now Testing");
  const [a, b] = useState("asdf"); // << 이렇게 쓰면 내 앞에 가져오지 말 것.
  // console.log("a");

  useEffect(() => {
    console.log("Test Component Mounted");
    return () => {
      console.log("Test Component Will Mount");
    };
    // return으로 반환하는 method가 componentWillUnmount
    // 언제 쓰면 좋을까? socket 통신
  }, []);

  return <div>{test}</div>;
};

export default Test;
