import { connect } from "react-redux";
import { Header } from "./index.js";
import React, { useEffect } from 'react';
import { setUserData } from '../../state/actionManager.js';
import * as axios from 'axios';

const HeaderContainer = (props) => {
  useEffect(() => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then(result => {
        if (result.data.resultCode === 0) {
          props.setUserData(result.data.data);
        }
      });
  }, [props]);

  return (
    <Header {...props} />
  );
}

const mapStateToProps = (state) => ({userData: state.userData});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
