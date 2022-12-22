import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import getUserStatus from '../../thunk/getUserStatus';
import updateUserStatus from '../../thunk/updateUserStatus';
import useCallback from '../../hooks/useCallback';

const mapStateToProps = (state) => {
  return ({
    id: state.pageContent.currentUser.userId || state.userData.id,
    status: state.pageContent.currentUser.status,
    userId: state.userData.id,
  })
};

const Status = ({
  status,
  id,
  getUserStatus,
  updateUserStatus,
  userId,
}) => {
  const [showStatus, setShowStatus] = useState(true);
  const [statusValue, setStatusValue] = useState(status);
  const statusBar = useRef(null);

  const sameUser = (userId === id);

  const clickHandler = (e) => {
    if (sameUser) {
      if (!statusBar.current) {
        setShowStatus(true);
        setStatusValue(status);
      } else {
        setShowStatus(e.target !== statusBar.current);
      }
    }
  };

  useCallback(() => setStatusValue(status), [status]);
  useCallback(() => {
    if (id) {
      getUserStatus(id);
    }
  }, [id]);

  useEffect(() => {
    if (sameUser) {
      document.addEventListener('click', clickHandler);
      return () => document.removeEventListener('click', clickHandler);
    }
  }, [sameUser]);

  const onChange = (e) => {
    setStatusValue(e.target.value);
  };

  const onClick = () => {
    updateUserStatus(statusValue, userId);
    setShowStatus(true);
  };

  return showStatus ? (
    <p ref={statusBar} className='profile__status-text' style={(userId === id) ? { cursor: 'pointer' } : { cursor: 'unset' }}>
      {status ?? ''}
    </p>
  ) : (
    <div className='profile__status-change-container' onClick={e => e.stopPropagation()}>
      <div style={{ width: '100%' }}>
        <input type='text' onChange={onChange} autoFocus value={statusValue} />
        <button type='button' onClick={onClick}>
          Save changes
        </button>
      </div>
    </div>
  );
};

export default compose(connect(mapStateToProps, { getUserStatus, updateUserStatus }))(Status);

