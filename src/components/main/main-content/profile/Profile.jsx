import { useState, useCallback, useMemo } from "react";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { compose } from "redux";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import {
  TextField,
  Alert,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextareaAutosize,
} from "@mui/material";
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
    aboutMe: yup.string().required(),
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

//todo: create array with link name and create in .map multiple text inputs for links

const Profile = ({
  user,
  annotations,
  templates,
  jobIcons,
  titles,
  id,
  userId,
  //handler,
}) => {
  const [isEditMode, setEditMode] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeMode = useCallback((e) => {
    console.log("fires");
    console.log(e.target);
    setEditMode((state) => !state);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
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

  const handler = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("submitted data:", data);
        setError(null);
        setEditMode(false);
        handler(data);
      })}
    >
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
            {isEditMode ? (
              <>
                <TextField
                  {...register("fullName")}
                  style={{ marginBottom: 15 }}
                  data-testid="user-name"
                  label="User full name"
                  id="user-name"
                />
                <ErrorMessage errors={errors} name="fullName" />
              </>
            ) : (
              <h3>{user?.fullName}</h3>
            )}

            <Status />

            {isUserProfileOwner && (
              <Button
                variant="contained"
                className="profile__edit-button"
                onClick={isEditMode ? null : handleChangeMode}
                type={isEditMode ? "submit" : "button"}
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
              {isEditMode ? (
                <>
                  <TextField
                    {...register("aboutMe")}
                    style={{ marginBottom: 15 }}
                    data-testid="about-me"
                    label="About me"
                    id="about-me"
                  />
                  <ErrorMessage errors={errors} name="aboutMe" />
                </>
              ) : (
                <p
                  className="profile__user-text"
                  data-testid="profile-template-aboutMe"
                >
                  {user?.aboutMe || templates.aboutMe}
                </p>
              )}
            </div>

            {isEditMode ? (
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...register("lookingForAJob")}
                      data-testid="looking-for-a-job"
                    />
                  }
                  label="Are you looking for job?"
                />
              </FormGroup>
            ) : (
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
            )}
          </div>

          <div className="profile__text-wrapper">
            <p className="profile__user-text" data-testid="profile-skills">
              {annotations.skills}
            </p>
            {isEditMode ? (
              <>
                <TextareaAutosize
                  {...register("lookingForAJobDescription")}
                  style={{ marginBottom: 15 }}
                  data-testid="looking-for-a-job-description"
                  label="Looking for a job description"
                  id="looking-for-a-job-description"
                />
                <ErrorMessage
                  errors={errors}
                  name="lookingForAJobDescription"
                />
              </>
            ) : (
              <p
                className="profile__user-text"
                data-testid="profile-template-lookingForJob"
              >
                {user?.lookingForAJobDescription || templates.skills}
              </p>
            )}
          </div>

          <div className="profile__text-wrapper">
            <p className="profile__user-text" data-testid="profile-contacts">
              {annotations.contacts}
            </p>
            {isEditMode ? (
              <>
                <TextField
                  {...register("contacts.github")}
                  style={{ marginBottom: 15 }}
                  data-testid="github"
                  label="github"
                  id="github"
                />
                <TextField
                  {...register("contacts.vk")}
                  style={{ marginBottom: 15 }}
                  data-testid="vk"
                  label="vk"
                  id="vk"
                />
                <TextField
                  {...register("contacts.facebook")}
                  style={{ marginBottom: 15 }}
                  data-testid="facebook"
                  label="facebook"
                  id="facebook"
                />
                <TextField
                  {...register("contacts.instagram")}
                  style={{ marginBottom: 15 }}
                  data-testid="instagram"
                  label="instagram"
                  id="instagram"
                />
                <TextField
                  {...register("contacts.twitter")}
                  style={{ marginBottom: 15 }}
                  data-testid="twitter"
                  label="twitter"
                  id="twitter"
                />
                <TextField
                  {...register("contacts.website")}
                  style={{ marginBottom: 15 }}
                  data-testid="website"
                  label="website"
                  id="website"
                />
                <TextField
                  {...register("contacts.youtube")}
                  style={{ marginBottom: 15 }}
                  data-testid="youtube"
                  label="youtube"
                  id="youtube"
                />
                <TextField
                  {...register("contacts.mainLink")}
                  style={{ marginBottom: 15 }}
                  data-testid="mainLink"
                  label="mainLink"
                  id="mainLink"
                />
              </>
            ) : (
              contacts
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export const ProfileComponent = Profile;

export default compose(connect(mapStateToProps))(Profile);
