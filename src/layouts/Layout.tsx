import { Outlet } from "react-router-dom";
import Header from "../component/view/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
