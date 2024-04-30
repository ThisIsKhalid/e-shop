import Header from "@/components/views/Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <p>footer</p>
    </div>
  );
}
