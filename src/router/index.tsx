import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../page/Register/Register";
import Join from "../page/JoinProgram/Join";
import CustomerInfo from "../page/JoinProgram/CustomerInfo";
import Detail from "../page/JoinProgram/Detail";
import Info from "../page/JoinProgram/Info";
import Verification from "../page/JoinProgram/Verification";
const Router = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <MainLayout />,

      children: [
        { path: "register", element: <Register /> },
        {
          path: "joinprogram",
          element: <Join />,
        },
        {
          path: "joinprogram/verification",
          element: <Verification />,
        },
        {
          path: "joinprogram/verification/customerinfo",
          element: <CustomerInfo />,
        },
        {
          path: "/joinprogram/verification/customerinfo/detail",
          element: <Detail />,
        },
        {
          path: "info",
          element: <Info />,
        },
      ],
    },
  ]);
  return elements;
};
export default Router;
