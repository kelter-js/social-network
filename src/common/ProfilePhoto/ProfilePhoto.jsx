import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { CircularProgress } from "@mui/material";

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
  userId,
  currentPhoto,
  defaultPhoto,
  isLoading,
}) => {
  const [newUserPhoto, setNewUserPhoto] = useState(null);

  const isUserProfileOwner = userId === id;

  useEffect(() => {
    if (newUserPhoto) {
      updateUserPhoto(newUserPhoto);
    }
  }, [newUserPhoto]);

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

export default compose(connect(mapStateToProps, { updateUserPhoto }))(
  ProfilePhoto
);
