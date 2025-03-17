import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Index";
import ShoppingPost from "../pages/ShoppiongPost/Index";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import UserRoutes from "./UserRoutes";
import ModRoutes from "./ModRoutes";
import PostProduct from "../pages/PostProduct/Index";


const router = createBrowserRouter([
  UserRoutes, // ของ user router
  ModRoutes, // ของ mod router

  { path: "", element: <Home /> },
  { path: "shoppingpost", element: <ShoppingPost /> },
  { path: "product/:id", element: <ProductDetail /> },
  { path: "/post", element: <PostProduct /> },

  // {
  //   path: "/",
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/shoppost",
  //       element: <ShoppingPost />,
  //     },
  //     {
  //       path: "/shoppost/:id",
  //       element: <ProductDetail />,
  //     },
  //     {
  //       path: "/post",
  //       element: <AddProduct />,
  //     },
  //   ],
  //},
]);

export default router;
