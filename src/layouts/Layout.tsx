import { Outlet } from "react-router-dom";
import Header from "../component/view/Header/Header";
import Footer from "../component/view/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
