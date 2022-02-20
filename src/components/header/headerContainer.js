import { connect } from "react-redux";
import { Header } from "./index.js";
import React, { useEffect } from 'react';
import { setUserData } from '../../state/actionManager.js';
import userAPI from '../../API/api.js';

const HeaderContainer = (props) => {
  useEffect(() => {
    userAPI.authenticateUser()
      .then(result => {
        if (result.data.resultCode === 0) {
          props.setUserData(result.data.data);
        }
      });
  }, []);

  return (
    <Header {...props} />
  );
}

const mapStateToProps = (state) => ({userData: state.userData});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
