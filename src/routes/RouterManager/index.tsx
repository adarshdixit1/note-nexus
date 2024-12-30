import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../index";
// import { MemberLayout, VisitorLayout } from "../RouterLazyImports";
import { Wrappers } from "../../components/common";

const Index = () => {
  <Wrappers>
    <Suspense>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            path={route.path}
            element={
            //   <VisitorLayout>
                <route.component />
            //   </VisitorLayout>
            }
            key={index}
          />
        ))}
        {privateRoutes.map((route, index) => (
          <Route
            path={route.path}
            element={
            //   <MemberLayout>
                <route.component />
            //   </MemberLayout>
            }
            key={index}
          />
        ))}
      </Routes>
    </Suspense>
  </Wrappers>;
};

export default Index;
