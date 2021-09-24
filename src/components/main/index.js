import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'
import { Navigation } from './navigation/navigation-list.js'
import { MainPageContent } from './main-content/main-content.js'
import { Dialogs } from './dialogs/dialogs.js'
import { Music } from './music/music.js'
import { News } from './news/news.js'
import { Settings } from './settings/settings.js'
import { createProfileData } from '../../service.js'
import { Constants } from '../../constants.js'

const Main = (props) => {
  const userData = {
    'mainAvatar': Constants.defaultMainAvatar,
    'profileAvatar': Constants.defaultProfileAvatar,
    'userData': createProfileData(Constants.defaultProfile),
    'userName': Constants.defaultProfileName,
  };

  const [currentPageHeader, headerUpdater] = useState('Профиль пользователя');

  const navigationPaths = Constants.defaultMenu;

  const paths = {
    'profile': `/${navigationPaths[0]}`,
    'dialogs': `/${navigationPaths[1]}`,
    'news': `/${navigationPaths[2]}`,
    'music': `/${navigationPaths[3]}`,
    'settings': `/settings`,
  }

  const headers = {
    'profile': 'Профиль пользователя',
    'dialogs': 'Диалоги пользователя',
    'news': 'Новостная лента',
    'music': 'Музыка пользователя',
    'settings': 'Настройки профиля',
  }

  return (
    <BrowserRouter>
      <main className='page-main container'>
        <h1 className='visually-hidden'>Социальная сеть ВРеакте</h1>
        <nav className='page-main__navigation'>
          <Navigation navigation={navigationPaths} />
          <NavLink activeClassName='navigation__link--current' className='navigation__link' to='/settings'>Settings</NavLink>
        </nav>
        <section className='page-main__content-wrapper'>
          <h2 className='visually-hidden'>{currentPageHeader}</h2>
          <Switch>
            <Route path={paths.profile} component={() => {
              headerUpdater(headers.profile);
              return (<MainPageContent user={userData} feed={Constants.defaultFeed} />);
            }} />
            <Route path={paths.dialogs} component={() => {
              headerUpdater(headers.dialogs);
              return (<Dialogs dialogs={Constants.defaultDialogs} />);
            }} />
            <Route path={paths.news} component={() => {
              headerUpdater(headers.news);
              return (<News />);
            }} />
            <Route path={paths.music} component={() => {
              headerUpdater(headers.music);
              return (<Music />);
            }} />
            <Route path={paths.settings} component={() => {
              headerUpdater(headers.settings);
              return (<Settings />);
            }} />
            <Route path='/'>
              <Redirect to={paths.profile} />
            </Route>
          </Switch>
        </section>
      </main>
    </BrowserRouter>
  );
}

export { Main }
