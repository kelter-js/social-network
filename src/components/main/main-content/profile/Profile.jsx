import { useState, useCallback, useMemo } from "react";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { compose } from "redux";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import * as yup from "yup";

import {
  getUserId,
  getCurrentId,
} from "../../../../state/selectors/userSelectors";
import ProfilePhoto from "../../../../common/ProfilePhoto/ProfilePhoto";
import Status from "../../../../common/Status/Status";

const mapStateToProps = (state) => {
  return {
    id: getCurrentId(state),
    userId: getUserId(state),
  };
};

const schema = yup
  .object({
    userId: yup.number().required(),
    lookingForAJob: yup.boolean().required(),
    lookingForAJobDescription: yup.string().required(),
    fullName: yup.string().required(),
    contacts: yup.object().shape({
      github: yup.string().required(),
      vk: yup.string().required(),
      facebook: yup.string().required(),
      instagram: yup.string().required(),
      twitter: yup.string().required(),
      website: yup.string().required(),
      youtube: yup.string().required(),
      mainLink: yup.string().required(),
    }),
  })
  .required();

const Profile = ({
  user,
  annotations,
  templates,
  jobIcons,
  titles,
  id,
  userId,
}) => {
  const [isEditMode, setEditMode] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeMode = useCallback(() => {
    setEditMode((state) => !state);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const isUserProfileOwner = userId === id;

  const contacts = useMemo(() => {
    if (user?.contacts?.length === 0) {
      return templates.contacts;
    }

    return (
      <ul className="profile__user-links-list">
        {user?.contacts?.map((item, index) => {
          const itemClass = `profile__user-contact profile__user-contact--${item[0]}`;

          const link = String(item[1]).includes("https://")
            ? item[1]
            : `https://${item[1]}`;

          return (
            <li className={itemClass} key={index}>
              <a
                rel="noreferrer"
                href={link}
                className="profile__user-link"
                target="_blank"
              >
                {item[1]}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }, [user?.contacts]);

  const getChangeModeButtonDescription = () => {
    if (isEditMode) {
      return "Apply changes";
    }

    return "Edit profile";
  };

  return (
    <>
      <img
        alt="Main profile"
        className="profile__main-avatar"
        src={user?.photos?.large}
      />

      <div className="profile__wrapper">
        <div className="profile__avatar-wrapper">
          <ProfilePhoto />
        </div>

        <div className="profile__info-wrapper">
          <div className="profile__name">
            <h3>{user?.fullName}</h3>

            <Status />

            {isUserProfileOwner && (
              <Button
                variant="contained"
                className="profile__edit-button"
                onClick={handleChangeMode}
              >
                {isEditMode ? (
                  <PublishedWithChangesIcon className="profile__edit-button-icon" />
                ) : (
                  <EditIcon className="profile__edit-button-icon" />
                )}
                {getChangeModeButtonDescription()}
              </Button>
            )}
          </div>

          <div className="profile__text-wrapper profile__text-wrapper--job">
            <div>
              <p
                className="profile__user-text"
                data-testid="profile-annotation"
              >
                {annotations.userInfo}
              </p>
              <p
                className="profile__user-text"
                data-testid="profile-template-aboutMe"
              >
                {user?.aboutMe || templates.aboutMe}
              </p>
            </div>
            <img
              alt="Job searching status"
              className="profile__job-status"
              src={
                user?.lookingForAJob
                  ? jobIcons.lookingForJobIcon
                  : jobIcons.dontLookForJobIcon
              }
              title={user?.lookingForAJob ? titles.yes : titles.no}
              data-testid="looking-for-jon-icon"
            />
          </div>

          <div className="profile__text-wrapper">
            <p className="profile__user-text" data-testid="profile-skills">
              {annotations.skills}
            </p>
            <p
              className="profile__user-text"
              data-testid="profile-template-lookingForJob"
            >
              {user?.lookingForAJobDescription || templates.skills}
            </p>
          </div>

          <div className="profile__text-wrapper">
            <p className="profile__user-text" data-testid="profile-contacts">
              {annotations.contacts}
            </p>
            {contacts}
          </div>
        </div>
      </div>
    </>
  );
};

export const ProfileComponent = Profile;

export default compose(connect(mapStateToProps))(Profile);
