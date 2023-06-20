import { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/header/HeaderContainer';
import Footer from './components/footer/Footer';
import Loading from './utils/Loading';

const DummyComponent = lazy(() => import('./utils/DummyComponent.jsx'));
const Main = lazy(() => import('./components/main/MainContainer.jsx'));
const UserList = lazy(() => import('./components/main/users/UserListContainer.jsx'));
const Login = lazy(() => import('./components/Login/Login.jsx'));
const Dialogs = lazy(() => import('./components/main/dialogs/DialogsContainer.jsx'));
const MainPageContent = lazy(() => import('./components/main/main-content/MainContentContainer.jsx'));

const ComponentRouter = ({ paths }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            path={paths.login}
            render={() => <Login />}
          />
          <Redirect exact from='/' to={paths.profile} />
          <Route
            path={paths.profile}
            render={() => <Main mainContent={<MainPageContent />} />}
          />
          <Route
            path={paths.messages}
            render={() => <Main mainContent={<Dialogs />} />}
          />
          <Route
            path={paths.news}
            render={() => <Main mainContent={<DummyComponent title='Заглушка под страницу с новостями' />} />}
          />
          <Route
            path={paths.music}
            render={() => <Main mainContent={<DummyComponent title='Заглушка под страницу с музыкой' />} />}
          />
          <Route
            path={paths.users}
            render={() => <Main mainContent={<UserList />} />}
          />
          <Route
            path={paths.settings}
            render={() => <Main mainContent={<DummyComponent title='Заглушка под страницу с настройками' />} />}
          />
        </Switch>
      </Suspense>

      <Footer />
    </>
  );
};

export default ComponentRouter;
