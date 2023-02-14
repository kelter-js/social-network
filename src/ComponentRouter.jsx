import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPageContent from './components/main/main-content/MainContentContainer';
import Dialogs from './components/main/dialogs/DialogsContainer';
import UserList from './components/main/users/UserListContainer';
import Header from './components/header/HeaderContainer';
import Footer from './components/footer/Footer';
import Login from './components/Login/Login';
import Main from './components/main/MainContainer';
import DummyComponent from './utils/DummyComponent';

const ComponentRouter = ({ paths }) => {
  return (
    <>
      <Header />

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

      <Footer />
    </>
  );
};

export default ComponentRouter;
