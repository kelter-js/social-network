import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink, Redirect, useHistory } from 'react-router-dom'
import { Navigation } from './navigation/navigation-list.js'
import { MainPageContent } from './main-content/main-content.js'
import { Dialogs } from './dialogs/dialogs.js'
import { Music } from './music/music.js'
import { News } from './news/news.js'
import { Settings } from './settings/settings.js'
import { getCurrentHeader } from '../../service.js'

const Main = (props) => {
  const history = useHistory();
  const [currentPageHeader, headerUpdater] = useState(
    props.headers[getCurrentHeader()]
  );

  useEffect(() => {
    return history.listen((location) => {
      let path = location.pathname.split('/');

      path.includes('messages') ? headerUpdater(props.headers.messages) : headerUpdater(props.headers[path[1]])
    })
 },[history, currentPageHeader, props.headers]);

  return (
    <main className='page-main container'>
      <h1 className='visually-hidden'>Социальная сеть ВРеакте</h1>
      <nav className='page-main__navigation'>
        <Navigation navigation={props.menu} />
        <NavLink activeClassName='navigation__link--current' className='navigation__link' to={props.paths.settings}>Settings</NavLink>
      </nav>
      <section className='page-main__content-wrapper'>
        <h2 className='visually-hidden'>{currentPageHeader}</h2>
        <Switch>
          <Route path={props.paths.profile} render={() => <MainPageContent message = {props.defaultMessage} user={props.userData} feed={props.feed} />} />
          <Route path={props.paths.dialogs} render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route path={props.paths.news} render={() => <News />}/>
          <Route path={props.paths.music} render={() => <Music />}/>
          <Route path={props.paths.settings} render={() => <Settings />}/>
          <Route path='/'>
            <Redirect to={props.paths.profile} />
          </Route>
        </Switch>
      </section>
    </main>
  );
}

export { Main }
