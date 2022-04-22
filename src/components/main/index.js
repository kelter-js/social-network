import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavigationListContainer } from './navigation/navigationListContainer.js';
import { NavigationItem } from './navigation/navigationItem.js';

const Main = ({
  pageContent,
  ComponentToRender,
  updateHeader,
  setDefaultProfile
}) => {
  const history = useHistory();

  history.listen((location) => {
    const path = location.pathname.split('/');

    if (!location.state) {
      setDefaultProfile();
    }

    path.includes('messages') ? updateHeader('messages') : updateHeader(path[1]);
  });

  return (
    <main className='page-main container'>
      <h1 className='visually-hidden'>{pageContent.mainHeader}</h1>
      <nav className='page-main__navigation'>
        <NavigationListContainer />
        <NavigationItem navItem={pageContent.settingsButton} />
      </nav>
      <section className='page-main__content-wrapper'>
        <h2 className='visually-hidden'>{pageContent.currentHeader}</h2>
        <ComponentToRender />
      </section>
    </main>
  );
}

export { Main }
