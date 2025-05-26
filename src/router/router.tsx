import { createBrowserRouter } from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import Contact from "../pages/clients/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutcline />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
