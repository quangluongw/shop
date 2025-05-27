import { createBrowserRouter } from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import Home from "../pages/clients/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutcline />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
