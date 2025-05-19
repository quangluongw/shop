import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";

const RouteProvider = () => {
  return <RouterProvider router={router} />;
};

export default RouteProvider;
