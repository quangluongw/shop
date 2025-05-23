import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import ProductDetail from "../pages/clients/ProductDetail";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layoutcline />,
    children: [
      {
        path: "/sanPham",
        element: <ProductDetail />,
      },
    ],
  },
]);
export const Routes: React.FC = () => {
  return <RouterProvider router={routes} />;
};
