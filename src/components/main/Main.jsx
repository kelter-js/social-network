import React from 'react';
import { useHistory } from 'react-router-dom';
import NavigationList from './navigation/NavigationListContainer';
import NavigationItem from './navigation/NavigationItem';

const Main = ({
  pageContent,
  mainContent,
  updateHeader,
  setDefaultProfile
}) => {
  const history = useHistory();

  history.listen((location) => {
    const path = location.pathname.split('/');

    if (!location.state) {
      setDefaultProfile();
    }

    updateHeader(path.includes('messages') ? 'messages' : path[1]);
  });

  return (
    <main className='page-main container'>
      <h1 className='visually-hidden'>{pageContent.mainHeader}</h1>
      <nav className='page-main__navigation'>
        <NavigationList />
        <NavigationItem navItem={pageContent.settingsButton} />
      </nav>
      <section className='page-main__content-wrapper'>
        <h2 className='visually-hidden'>{pageContent.currentHeader}</h2>
        {mainContent}
      </section>
    </main>
  );
}

export default Main;