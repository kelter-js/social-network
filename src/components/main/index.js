import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { NavigationListContainer } from './navigation/navigationListContainer.js';
import { NavigationItem } from './navigation/navigationItem.js';
import { MainPageContentContainer } from './main-content/mainContentContainer.js';
import { UserListContainer } from './users/userListContainer.js';
import { DialogsContainer } from './dialogs/dialogsContainer.js';
import { Music } from './music/music.js';
import { News } from './news/news.js';
import { Settings } from './settings/settings.js';

const Main = (props) => {
  const history = useHistory();

  const {
    pageContent,
    defaultMenuPaths,
    updateHeader,
    setDefaultProfile,
  } = props;

  history.listen((location) => {
    const path = location.pathname.split('/');

    if (!location.state) {
      setDefaultProfile();
    }

    path.includes('messages') ? updateHeader('messages') : updateHeader(path[1]);
  });

  return (
    <main className='page-main container'>
      <h1 className='visually-hidden'>{pageContent.mainHeader}</h1>
      <nav className='page-main__navigation'>
        <NavigationListContainer />
        <NavigationItem navItem={pageContent.settingsButton} />
      </nav>
      <section className='page-main__content-wrapper'>
        <h2 className='visually-hidden'>{pageContent.currentHeader}</h2>
        <Switch>
          <Redirect exact from='/' to={defaultMenuPaths.profile} />
          <Route path={defaultMenuPaths.profile} render={() => <MainPageContentContainer />} />
          <Route path={defaultMenuPaths.messages} render={() => <DialogsContainer />} />
          <Route path={defaultMenuPaths.news} render={() => <News />} />
          <Route path={defaultMenuPaths.music} render={() => <Music />} />
          <Route path={defaultMenuPaths.users} render={() => <UserListContainer />} />
          <Route path={defaultMenuPaths.settings} render={() => <Settings />} />
        </Switch>
      </section>
    </main>
  );
}

export { Main }
