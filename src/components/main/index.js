import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory
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
  history.listen((location) => {
    const path = location.pathname.split('/');
    path.includes('messages') ? props.updateHeader('messages') : props.updateHeader(path[1]);
  });

  return (
    <main className='page-main container'>
      <h1 className='visually-hidden'>{props.pageContent.mainHeader}</h1>
      <nav className='page-main__navigation'>
        <NavigationListContainer />
        <NavigationItem navItem={props.pageContent.settingsButton} />
      </nav>
      <section className='page-main__content-wrapper'>
        <h2 className='visually-hidden'>{props.pageContent.currentHeader}</h2>
        <Switch>
          <Route path={props.defaultMenuPaths.profile} render={() => <MainPageContentContainer />}/>
          <Route path={props.defaultMenuPaths.messages} render={() => <DialogsContainer />}/>
          <Route path={props.defaultMenuPaths.news} render={() => <News />} />
          <Route path={props.defaultMenuPaths.music} render={() => <Music />} />
          <Route path={props.defaultMenuPaths.users} render={() => <UserListContainer />} />
          <Route path={props.defaultMenuPaths.settings} render={() => <Settings />} />
        </Switch>
        <Redirect to={props.defaultMenuPaths.profile} />
      </section>
    </main>
  );
}

export { Main }
