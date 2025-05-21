import {  createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/Check Out/CheckOut";
import Notfound from "../pages/404";
import Account from "../pages/Account/Account";
// import Login from "../pages/client/Login";
import LayoutClient from "../layout/LayoutClient";
import Home from "../pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutClient />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      // {path: "/login", element: <Login />},
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

