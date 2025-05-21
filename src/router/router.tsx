import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import Home from "../pages/clients/Home";
import ProductDetail from "../pages/clients/ProductDetail";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layoutcline />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sanPham/?id",
        element: <ProductDetail />,
      },
    ],
  },
]);
export const Routes: React.FC = () => {
  return <RouterProvider router={routes} />;
};
