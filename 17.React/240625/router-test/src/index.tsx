import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// 앞으로 이 하위에서 컴포넌트에서 Routing을 할 것입니다.
// const router =[{path:"/"}] // 5 이상에서

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

// react-router-dom 6버전 맛보기
// const router = createBrowserRouter([
//   { path: "/", element: <div>하이?</div> },
//   {
//     path: "/test",
//     element: (
//       <div>
//         testing
//         <Outlet />
//       </div>
//     ),
//     children: [
//       {
//         path: "tt",
//         element: <div>TestTest</div>,
//       },
//     ],
//   },
// ]);

// root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
