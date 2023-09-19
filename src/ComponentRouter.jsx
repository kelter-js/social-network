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
      <Layout>
        <Switch>
          <Redirect exact from="/" to={paths.profile} />

          <Route path={paths.profile}>
            <Main mainContent={<MainPageContent />} />
          </Route>

          <Route path={paths.messages}>
            <Main mainContent={<Dialogs />} />
          </Route>

          <Route path={paths.news}>
            <Main
              mainContent={
                <DummyComponent title="Заглушка под страницу с новостями" />
              }
            />
          </Route>

          <Route path={paths.music}>
            <Main
              mainContent={
                <DummyComponent title="Заглушка под страницу с музыкой" />
              }
            />
          </Route>

          <Route path={paths.users}>
            <Main mainContent={<UserList />} />
          </Route>

          <Route path={paths.settings}>
            <Main
              mainContent={
                <DummyComponent title="Заглушка под страницу с настройками" />
              }
            />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default ComponentRouter;
