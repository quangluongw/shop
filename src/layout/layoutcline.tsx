import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const Layoutcline = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1440px] mx-auto p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layoutcline;
