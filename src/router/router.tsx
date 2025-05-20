import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Layoutcline from "../layout/layoutcline";
import Home from "../pages/clients/Home";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layoutcline />,
        children: [{
            index: true, element: <Home />
        }]
    }
])
export const Routes: React.FC = () => {
    return <RouterProvider router={routes} />;
};