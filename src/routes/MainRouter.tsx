import MainLayout from "@/layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>home</div>,
      },
      {
        path: "/home",
        element: <div>home</div>,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
    ],
  },
]);

export default router;
