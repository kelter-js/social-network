import React from 'react'
import { Header } from './components/header/index.js'
import { Main } from './components/main/index.js'
import { Footer } from './components/footer/index.js'
import { BrowserRouter } from 'react-router-dom'
import { createProfileData } from './service.js'
import { Constants } from './constants.js'

const App = () => {
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
  };

  return (
    <>
      <Header />
      <BrowserRouter>
        <Main
        defaultMessage = {Constants.defaultMessage} messages = {Constants.defaultMessages} dialogs = {Constants.defaultDialogs} feed = {Constants.defaultFeed} menu = {Constants.defaultMenu} userData = {userData} paths={paths} headers = {Constants.headers}/>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export { App }
