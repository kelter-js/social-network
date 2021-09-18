import React from 'react'
import { Header } from './header.js'
import { Body } from './body.js'
import { Footer } from './footer.js'
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
      <Body navigation = {Constants.defaultMenu} user = {userData} feed = {Constants.defaultFeed}/>
      <Footer />
    </>
  );
}

export { App }
