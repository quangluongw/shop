import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import Home from "../pages/Home";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layoutcline />,
        children: [{
            index: true, element: <Home />
        }]
    }
])
export const Router: React.FC = () => {
    return <RouterProvider router={router} />;
};