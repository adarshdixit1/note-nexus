import { Login } from "./routerLazyImports";
import { RoutePaths } from "./RoutesPaths";

const {
  loginPath,
  dashboard
} = RoutePaths;

const publicRoutes = [
  {
    path: loginPath,
    component: Login,
  },
];

const privateRoutes = [
  {
    path: dashboard,
    component: Login,
  },
];

export { publicRoutes, privateRoutes };
