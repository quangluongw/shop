import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import Signup from "../pages/client/Signup";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layoutcline />,
        children: [{
            path: "signup", element: <Signup />
        }]
    }
])
export const Router: React.FC = () => {
    return <RouterProvider router={router} />;
};