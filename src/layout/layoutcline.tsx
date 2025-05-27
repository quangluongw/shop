import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const Layoutcline = () => {
  return (
    <div>
      <Header />
      <main className="max-w-[1440px] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layoutcline;
