import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";

type Props = {
  children: React.ReactNode
};

const RouteProvider = ({ children }: Props) => {
  return <RouterProvider router={router}>
    {children}
  </RouterProvider>;
};

export default RouteProvider;
