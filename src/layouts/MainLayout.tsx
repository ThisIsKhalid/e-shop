import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <p>header</p>
      <div>
        <Outlet />
      </div>
      <p>footer</p>
    </div>
  );
}
