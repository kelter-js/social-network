import React from 'react'
import { Route, Switch, NavLink, Redirect, useHistory } from 'react-router-dom'
import { Navigation } from './navigation/navigationList.js'
import { MainPageContent } from './main-content/mainContent.js'
import { Dialogs } from './dialogs/dialogs.js'
import { Music } from './music/music.js'
import { News } from './news/news.js'
import { Settings } from './settings/settings.js'

const Main = (props) => {
  const history = useHistory();

  history.listen((location) => {
    let path = location.pathname.split('/');

    path.includes('messages') ? (
      props.dispatch(props.store.actionManager.createActionChangeCurrentHeader('messages'))) : (
      props.dispatch(props.store.actionManager.createActionChangeCurrentHeader(path[1])));
  })

  return (
    <main className='page-main container'>
      <h1 className='visually-hidden'>Социальная сеть ВРеакте</h1>
      <nav className='page-main__navigation'>
        <Navigation navigation={props.store.defaultMenu} />
        <NavLink activeClassName='navigation__link--current' className='navigation__link' to={props.store.defaultMenuPaths.settings}>
          Settings
        </NavLink>
      </nav>
      <section className='page-main__content-wrapper'>
        <h2 className='visually-hidden'>{props.store.pageContent.currentHeader}</h2>
        <Switch>
          <Route
            path={props.store.defaultMenuPaths.profile}
            render={() =>
            <MainPageContent
              handlers = {props.store.handlers}
              dispatch = {props.dispatch}
              defaultText={props.store.pageContent.defaultText}
              currentText={props.store.pageContent.currentText}
              user={props.store.pageContent.userData}
              feed={props.store.pageContent.feed}
              actionManager = {props.store.actionManager}
            />}
          />
          <Route
            path={props.store.defaultMenuPaths.messages}
            render={() =>
            <Dialogs
              handlers = {props.store.handlers}
              dialogs={props.store.chat.dialogs}
              messages={props.store.chat.messages}
              defaultText = {props.store.chat.defaultText}
              currentText = {props.store.chat.currentText}
              actionManager = {props.store.actionManager}
              dispatch = {props.dispatch}
            />}
          />
          <Route path={props.store.defaultMenuPaths.news} render={() => <News />} />
          <Route path={props.store.defaultMenuPaths.music} render={() => <Music />} />
          <Route path={props.store.defaultMenuPaths.settings} render={() => <Settings />} />
          <Route path='/'>
            <Redirect to={props.store.defaultMenuPaths.profile} />
          </Route>
        </Switch>
      </section>
    </main>
  );
}

export { Main }
