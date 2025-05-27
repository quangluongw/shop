import { createBrowserRouter } from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import Products from "../pages/clients/Products";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutcline />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);
