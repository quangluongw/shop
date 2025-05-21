import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import ProductDetail from "../pages/clients/ProductDetail";
import Home from "../pages/clients/Home";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layoutcline />,
    children: [
      {
        path: "/sanPham",
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
