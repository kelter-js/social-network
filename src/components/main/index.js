import React from 'react'
import { Navigation } from './navigation/navigation-list.js'
import { MainPageContent } from './main-content/main-content.js'
import { createProfileData } from '../../service.js'
import { Constants } from '../../constants.js'

const Main = (props) => {
  const userData = {
    'mainAvatar': Constants.defaultMainAvatar,
    'profileAvatar': Constants.defaultProfileAvatar,
    'userData': createProfileData(Constants.defaultProfile),
    'userName': Constants.defaultProfileName,
  };

  return (
    <main className='page-main container'>
      <h1 className='visually-hidden'>Социальная сеть ВРеакте</h1>
      <nav className='page-main__navigation'>
        <Navigation navigation={Constants.defaultMenu} />
        <a className='navigation__link' href='#'>Settings</a>
      </nav>
      <section className='page-main__content-wrapper'>
        <h2 className='visually-hidden'>Профиль пользователя</h2>
        <div>
          <MainPageContent user={userData} feed = {Constants.defaultFeed}/>
        </div>
      </section>
    </main>
  );
}

export { Main }
