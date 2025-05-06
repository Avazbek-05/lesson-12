import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Shop from "../pages/shop/shop";
import Like from "../pages/like/like";
import MainLayout from "../components/main-layout/mainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/like",
        element: <Like />,
      },
    ],
  },
]);
