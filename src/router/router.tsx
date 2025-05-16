import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import LayoutClient from "../layout/layoutClient";
import Signup from "../pages/client/Signup";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutClient />,
        children: [
            {path: "/signup", element: <Signup />}
        ]
    }
])
export const Router: React.FC = () => {
    return <RouterProvider router={router} />;
};