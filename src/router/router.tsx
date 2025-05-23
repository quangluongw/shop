import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import ForgotPassword from "../pages/client/ForgotPassword";
import ConfirmCode from "../pages/client/ConfirmCode";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutcline />,
    children: [
      {
        path: "quenmk",
        element: <ForgotPassword />,
      },
      {
        path: "code",
        element: <ConfirmCode />,
      },
    ],
  },
]);
export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
