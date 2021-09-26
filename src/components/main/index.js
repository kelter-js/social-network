import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink, Redirect, useHistory } from 'react-router-dom'
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

  const history = useHistory();

  useEffect(() => {
    const headers = {
      'profile': 'Профиль пользователя',
      'messages': 'Диалоги пользователя',
      'news': 'Новостная лента',
      'music': 'Музыка пользователя',
      'settings': 'Настройки профиля',
    }

    return history.listen((location) => {
      headerUpdater(headers[location.pathname.slice(1)])
    })
 },[history, currentPageHeader]);

  return (
    <main className='page-main container'>
      <h1 className='visually-hidden'>Социальная сеть ВРеакте</h1>
      <nav className='page-main__navigation'>
        <Navigation navigation={navigationPaths} />
        <NavLink activeClassName='navigation__link--current' className='navigation__link' to='/settings'>Settings</NavLink>
      </nav>
      <section className='page-main__content-wrapper'>
        <h2 className='visually-hidden'>{currentPageHeader}</h2>
        <Switch>
          <Route path={paths.profile} render={() => <MainPageContent user={userData} feed={Constants.defaultFeed} key = {document.location.href}/>} />
          <Route path={paths.dialogs} render={() => <Dialogs dialogs={Constants.defaultDialogs} messages={Constants.defaultMessages} key = {document.location.href}/>} />
          <Route path={paths.news} render={() => <News />} key = {document.location.href}/>
          <Route path={paths.music} render={() => <Music />} key = {document.location.href}/>
          <Route path={paths.settings} render={() => <Settings />} key = {document.location.href}/>
          <Route path='/'>
            <Redirect to={paths.profile} />
          </Route>
        </Switch>
      </section>
    </main>
  );
}

export { Main }
