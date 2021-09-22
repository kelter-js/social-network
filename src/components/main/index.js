import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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

  const navigationPaths = Constants.defaultMenu;
  const paths = {
    'profile': `/${navigationPaths[0]}`,
    'dialogs': `/${navigationPaths[1]}`,
    'news': `/${navigationPaths[2]}`,
    'music': `/${navigationPaths[3]}`,
    'settings': `/settings`,
  }

  return (
    <main className='page-main container'>
      <h1 className='visually-hidden'>Социальная сеть ВРеакте</h1>
      <nav className='page-main__navigation'>
        <Navigation navigation={navigationPaths} />
        <a className='navigation__link' href='/settings'>Settings</a>
      </nav>
      <section className='page-main__content-wrapper'>
        <h2 className='visually-hidden'>Профиль пользователя</h2>
        <div>
          <BrowserRouter>
            <Switch>
              <Route path={paths.profile} component={() => <MainPageContent user={userData} feed={Constants.defaultFeed} />} />
              <Route path={paths.dialogs} component={() => <Dialogs />} />
              <Route path={paths.news} component={() => <News />} />
              <Route path={paths.music} component={() => <Music />} />
              <Route path={paths.settings} component={() => <Settings />} />
            </Switch>
          </BrowserRouter>
        </div>
      </section>
    </main>
  );
}

export { Main }
