import { FC } from "react";
import { Route, Routes, useParams } from "react-router-dom";

interface IProps {}

const Test: FC<IProps> = ({}) => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      Testing
      {/* <Routes>
        <Route path="/" element={<div>root test</div>} />
        <Route path="/tt" element={<div>런</div>} />
      </Routes> */}
    </div>
  );
};

export default Test;
