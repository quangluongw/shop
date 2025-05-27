import { createBrowserRouter } from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import AboutUs from "../pages/clients/AboutUs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutcline />,
    children: [
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);
