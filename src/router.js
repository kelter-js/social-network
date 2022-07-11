import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import MainPageContent from "./components/main/main-content/mainContentContainer";
import Dialogs from "./components/main/dialogs/dialogsContainer";
import { News } from "./components/main/news/news";
import { Music } from "./components/main/music/music";
import UserList from "./components/main/users/userListContainer";
import { Settings } from "./components/main/settings/settings";
import HeaderContainer from './components/header/headerContainer';
import { Footer } from './components/footer/index.js';
import Login from "./components/Login";

const ComponentRouter = ({ paths }) => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route
          path={paths.login}
          render={() => <Login />}
        />
        <Redirect exact from='/' to={paths.profile} />
        <Route
          path={paths.profile}
          render={() => <PrivateRoute Component={MainPageContent} />}
        />
        <Route
          path={paths.messages}
          render={() => <PrivateRoute Component={Dialogs} />}
        />
        <Route
          path={paths.news}
          render={() => <PrivateRoute Component={News} />}
        />
        <Route
          path={paths.music}
          render={() => <PrivateRoute Component={Music} />}
        />
        <Route
          path={paths.users}
          render={() => <PrivateRoute Component={UserList} />}
        />
        <Route
          path={paths.settings}
          render={() => <PrivateRoute Component={Settings} />}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default ComponentRouter;
