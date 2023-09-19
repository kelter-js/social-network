import { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Loading from "./utils/Loading";
import Layout from "./components/Layout/Layout";

const Login = lazy(() => import("./components/Login/Login.jsx"));
const NotFound = lazy(() => import("./components/NotFound/NotFound.jsx"));

const UnauthorizedRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Layout>
      <Switch>
        <Redirect exact from="/" to="/login" />

        <Route path="/login">
          <Login />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  </Suspense>
);

export default UnauthorizedRoutes;
