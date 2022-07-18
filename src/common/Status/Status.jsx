import React, { useState, useRef, useEffect } from 'react';

const Status = ({ status }) => {
  const [showStatus, setShowStatus] = useState(true);
  const statusBar = useRef(null);

  const clickHandler = (e) => {
    if (!statusBar.current) {
      setShowStatus(true);
    } else {
      setShowStatus(e.target !== statusBar.current);
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, []);

  return showStatus ? (
    <p ref={statusBar} className='profile__status-text'>
      {status}
    </p>
  ) : (
    <div className='profile__status-change-container'>
      <div style={{ width: '100%' }} onClick={e => e.stopPropagation()}>
        <input type='text' onChange={(e) => { }} autoFocus value={status} />
        <button type='button'>
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Status;
