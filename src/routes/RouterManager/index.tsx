import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../index";
import { Wrappers } from "../../components/common";
import { AuthLayout,NonAuthLayout } from "../routerLazyImports";

const Index = () => (
  <Wrappers>
    <Suspense>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            path={route.path}
            element={
              // <AuthLayout>
                <route.component />
              // </AuthLayout>
            }
            key={index}
          />
        ))}
        {privateRoutes.map((route, index) => (
          <Route
            path={route.path}
            element={
              <NonAuthLayout>
                <route.component />
             </NonAuthLayout>
            }
            key={index}
          />
        ))}
      </Routes>
    </Suspense>
  </Wrappers>
);

export default Index;
