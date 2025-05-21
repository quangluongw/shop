import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const LayoutClient = () => {
    return (
        <div>
            <Header />
            <div className="max-w-[1280px] m-auto px-5 mt-5">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default LayoutClient;