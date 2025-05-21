import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layoutcline = () => {
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

export default Layoutcline;