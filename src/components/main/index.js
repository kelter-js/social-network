import React, { PureComponent } from 'react'
import { Navigation } from './navigation-list.js'
import { MainPageContent } from './main-content.js'

const Main = (props) => {
  return (
    <main className='page-main container'>
      <h1 className='visually-hidden'>Социальная сеть ВРеакте</h1>
      <nav className='page-main__navigation'>
        <Navigation navigation={props.navigation} />
        <a className='navigation__link' href='#'>Settings</a>
      </nav>
      <section className='page-main__content-wrapper'>
        <h2 className='visually-hidden'>Профиль пользователя</h2>
        <div>
          <MainPageContent data={props} />
        </div>
      </section>
    </main>
  );
}

export { Main }
