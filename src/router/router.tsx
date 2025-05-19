import {  createBrowserRouter } from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import Home from "../pages/Home";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/Check Out/CheckOut";
import Notfound from "../pages/404";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutcline />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path:"*",
        element:<Notfound/>
      }
    ],
  },
]);

