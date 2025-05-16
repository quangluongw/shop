import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import LayoutClient from "../layout/layoutClient";
import Login from "../pages/client/Login";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutClient />,
        children: [
            {path: "/login", element: <Login />}
        ]
    }
])
export const Router: React.FC = () => {
    return <RouterProvider router={router} />;
};
