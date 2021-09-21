import React from 'react'
import { Header } from './components/header/index.js'
import { Main } from './components/main/index.js'
import { Footer } from './components/footer/index.js'
import { Constants } from './constants.js'
import { createProfileData } from './service.js'

const App = () => {
  const userData = {
    'mainAvatar': Constants.defaultMainAvatar,
    'profileAvatar': Constants.defaultProfileAvatar,
    'userData': createProfileData(Constants.defaultProfile),
    'userName': Constants.defaultProfileName,
  };

  return (
    <>
      <Header />
      <Main navigation = { Constants.defaultMenu } user = { userData } feed = { Constants.defaultFeed }/>
      <Footer />
    </>
  );
}

export { App }
