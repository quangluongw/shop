import {
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import LayoutClient from "../layout/layoutClient";
import Home from "../pages/client/Home";
import Login from "../pages/client/Login";
import Signup from "../pages/client/Signup";
import About from "../pages/client/About";
import ProductDetail from "../pages/client/ProductDetail";
import Wishlist from "../pages/client/Wishlist";
import CheckOut from "../pages/client/CheckOut";
import Contact from "../pages/client/Contact";
import Account from "../pages/client/Account";
import NotFound from "../pages/client/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutClient />,
        children: [
            {index: true, element: <Home />},
            {path:"login", element: <Login />},
            {path:"signup", element: <Signup />},
            {path:"contact", element: <Contact />},
            {path:"about", element: <About />},
            {path:"product/:id", element: <ProductDetail />},
            {path:"wishlist/:id", element: <Wishlist />},
            {path:"checkout/:id", element: <CheckOut />},
            {path:"account/:id", element: <Account />},
            {path:"*", element: <NotFound />},
        ]
    }
    
])
export const Router: React.FC = () => {
    return <RouterProvider router={router} />;
};