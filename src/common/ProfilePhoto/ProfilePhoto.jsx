import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { CircularProgress } from "@mui/material";

import getUserPhoto from "../../thunk/getUserPhoto";
import updateUserPhoto from "../../thunk/updateUserPhoto";
import {
  getCurrentId,
  getUserId,
  getDefaultUserPhoto,
  getCurrentUserPhoto,
} from "../../state/selectors/userSelectors";

const mapStateToProps = (state) => {
  return {
    id: getCurrentId(state),
    userId: getUserId(state),
    currentPhoto: getCurrentUserPhoto(state),
    defaultPhoto: getDefaultUserPhoto(state),
  };
};

const ProfilePhoto = ({
  id,
  updateUserPhoto,
  getUserPhoto,
  userId,
  currentPhoto,
  defaultPhoto,
}) => {
  const [newUserPhoto, setNewUserPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const isUserProfileOwner = userId === id;

  useEffect(() => {
    if (newUserPhoto) {
      updateUserPhoto(newUserPhoto);
    }
  }, [newUserPhoto]);

  useEffect(() => {
    if (isUserProfileOwner) {
      setIsLoading(true);
      getUserPhoto(id).finally(() => setIsLoading(false));
    }
  }, []);

  const handleNewPhotoUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setNewUserPhoto(file);
    }
  };

  const avatarSource = currentPhoto ?? defaultPhoto;

  if (isUserProfileOwner) {
    return (
      <label className="profile__avatar-label">
        {isLoading ? (
          <CircularProgress size={15} />
        ) : (
          <>
            <img alt="User" className="profile__avatar" src={avatarSource} />
            <input
              type="file"
              onChange={handleNewPhotoUpload}
              className="visually-hidden"
            />
          </>
        )}
      </label>
    );
  }

  return <img alt="User" className="profile__avatar" src={avatarSource} />;
};

export const ProfilePhotoComponent = ProfilePhoto;

export default compose(
  connect(mapStateToProps, { getUserPhoto, updateUserPhoto })
)(ProfilePhoto);
