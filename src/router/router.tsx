import { createBrowserRouter } from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/Check Out/CheckOut";
import Notfound from "../pages/404";
import Account from "../pages/Account/Account";
import HomePage from "../pages/home/HomePage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutcline />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
        path: "accout",
        element: <Account />,
      },
      {
        path:"*",
        element:<Notfound/>
      }
    ],
  },
]);
