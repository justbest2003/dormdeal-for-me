import ModLayout from "../layouts/ModLayout/ModLayout";
import Home from "../pages/Home/Index";
import Mod from "../pages/ModPages/Index";

const ModRoutes = {
  path: "/mod",
  element: <ModLayout />,
  children: [{ path: "", element: <Mod /> }],
};

export default ModRoutes;
