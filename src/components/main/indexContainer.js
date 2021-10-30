import React from 'react';
import { useHistory } from 'react-router-dom';
import { Main } from './index.js';

const MainContainer = (props) => {
  const history = useHistory();

  history.listen((location) => {
    let path = location.pathname.split('/');

    path.includes('messages') ? (
      props.dispatch(props.store.actionManager.createActionChangeCurrentHeader('messages'))) : (
      props.dispatch(props.store.actionManager.createActionChangeCurrentHeader(path[1])));
  })

  return (<Main {...props}/>);
}

export { MainContainer }
