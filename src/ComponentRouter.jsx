import { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Loading from "./utils/Loading";

const NotFound = lazy(() => import("./components/NotFound/NotFound.jsx"));
const DummyComponent = lazy(() => import("./utils/DummyComponent.jsx"));
const Main = lazy(() => import("./components/main/MainContainer.jsx"));
const UserList = lazy(() =>
  import("./components/main/users/UserListContainer.jsx")
);
const Dialogs = lazy(() =>
  import("./components/main/dialogs/DialogsContainer.jsx")
);
const MainPageContent = lazy(() =>
  import("./components/main/main-content/MainContentContainer.jsx")
);

const ComponentRouter = ({ paths }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Redirect exact from="/" to={paths.profile} />

        <Route path={paths.profile}>
          <Layout>
            <Main mainContent={<MainPageContent />} />
          </Layout>
        </Route>

        <Route path={paths.messages}>
          <Layout>
            <Main mainContent={<Dialogs />} />
          </Layout>
        </Route>

        <Route path={paths.news}>
          <Layout>
            <Main
              mainContent={
                <DummyComponent title="Заглушка под страницу с новостями" />
              }
            />
          </Layout>
        </Route>

        <Route path={paths.music}>
          <Layout>
            <Main
              mainContent={
                <DummyComponent title="Заглушка под страницу с музыкой" />
              }
            />
          </Layout>
        </Route>

        <Route path={paths.users}>
          <Layout>
            <Main mainContent={<UserList />} />
          </Layout>
        </Route>

        <Route path={paths.settings}>
          <Layout>
            <Main
              mainContent={
                <DummyComponent title="Заглушка под страницу с настройками" />
              }
            />
          </Layout>
        </Route>

        <Route>
          <Layout>
            <NotFound />
          </Layout>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default ComponentRouter;
