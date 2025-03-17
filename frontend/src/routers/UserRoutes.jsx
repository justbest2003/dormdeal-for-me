import Home from "../pages/Home/Index";
import UserLayout from "../layouts/UserLayout/UserLayout";
import ManagePostStatus from "../pages/UserPages/ManagePostStatus";
import PendingPosts from "../pages/UserPages/PendingPosts/Index";
import RevisionPosts from "../pages/UserPages/RevisionPosts/Index";
import RejectedPosts from "../pages/UserPages/RejectedPosts/Index";
import SoldOutPosts from "../pages/UserPages/SoldOutPosts/Index";
import ManagePost from "../pages/UserPages/ManagePosts/Index";
import PostProduct from "../pages/PostProduct/Index";
import ShoppingPost from "../pages/ShoppiongPost/Index";



const UserRoutes = {
  path: "/",
  element: <UserLayout />,
  children: [
    { path: "", element: <Home /> },
    { path: "managepost", element: <ManagePost /> },
    { path: "post", element: <PostProduct /> },
    { path: "shoppingpost", element: <ShoppingPost /> },

    //routes ของ ManagePostStatus
    {
      path: "/ManagePostStatus",
      element: <ManagePostStatus />,
      children: [
        { path: "pending", element: <PendingPosts /> },
        { path: "revision", element: <RevisionPosts /> },
        { path: "rejected", element: <RejectedPosts /> },
        { path: "sold-out", element: <SoldOutPosts /> },
      ],
    },
  ],
};

export default UserRoutes;
