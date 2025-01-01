import { lazy } from "react";

const AuthLayout = lazy(() => import("../../layout/AuthLayout"));
const NonAuthLayout = lazy(() => import("../../layout/NonAuthLayout"));
const Login = lazy(() => import("../../screen/Login"));


export {
    AuthLayout,
    NonAuthLayout,
    Login,
};