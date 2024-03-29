import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { compose } from "redux";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import EditIcon from "@mui/icons-material/Edit";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  TextField,
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextareaAutosize,
  Modal,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import cn from "classnames";

import {
  getUserId,
  getCurrentId,
} from "../../../../state/selectors/userSelectors";
import updateUserProfile from "../../../../thunk/updateUserProfile";
import ProfilePhoto from "../../../../common/ProfilePhoto/ProfilePhoto";
import Status from "../../../../common/Status/Status";
import useProfile from "../../../../hooks/useProfile";
import getUserProfileData from "../../../../thunk/getUserProfileData";

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

const links = [
  "github",
  "vk",
  "facebook",
  "instagram",
  "twitter",
  "website",
  "mainLink",
  "youtube",
];

const Profile = ({
  user,
  annotations,
  templates,
  jobIcons,
  titles,
  id,
  userId,
  updateUserProfile,
  getUserProfileData,
}) => {
  const [isEditMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isModalOpened, setModalOpened] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpened((state) => !state);
  }, []);

  const handleChangeMode = useCallback((e) => {
    setEditMode((state) => !state);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const isUserProfileOwner = userId === id;

  const getOwnProfile = useCallback(() => {
    if (isUserProfileOwner) {
      setIsLoading(true);
      getUserProfileData(userId).finally(() => setIsLoading(false));
    }

    return null;
  }, [isUserProfileOwner]);

  const { refetch, isError } = useProfile(getOwnProfile);

  useEffect(() => {
    if (isUserProfileOwner) {
      reset({
        aboutMe: user.aboutMe,
        lookingForAJob: user.lookingForAJob,
        lookingForAJobDescription: user.lookingForAJobDescription,
        fullName: user.fullName,
        contacts: Object.fromEntries(user.contacts ?? []),
      });
    }
  }, [user]);

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
    setError(null);
    setEditMode(false);
    updateUserProfile({ ...data, userId: Number(userId) }).then(() => {
      refetch();
      toggleModal();
    });
    reset({});
    setEditMode(false);
  };

  const handleResetChanges = useCallback(
    (e) => {
      e.preventDefault();
      handleChangeMode();
      reset({});
    },
    [reset]
  );

  return (
    <form onSubmit={handleSubmit(handler)}>
      <Modal open={isModalOpened} onClose={toggleModal}>
        <Box
          sx={{ bgcolor: "background.paper", p: 5, boxShadow: 24 }}
          className="profile__modal"
        >
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Profile data has been updated successfully!
          </Typography>

          <Button
            variant="contained"
            color="success"
            onClick={toggleModal}
            className="profile__modal-button"
          >
            Success
          </Button>
        </Box>
      </Modal>

      <img
        alt="Main profile"
        className="profile__main-avatar"
        src={user?.photos?.large}
      />

      <div className="profile__wrapper">
        <div
          className={cn("profile__avatar-wrapper", "profile__avatar-edit-mode")}
        >
          <ProfilePhoto isLoading={isLoading} />
        </div>

        <div className="profile__info-wrapper">
          <div className="profile__name">
            {isEditMode ? (
              <div className="profile__field">
                <TextField
                  {...register("fullName")}
                  style={{ marginBottom: 15 }}
                  data-testid="user-name"
                  label="User full name"
                  id="user-name"
                />
                <ErrorMessage
                  errors={errors}
                  name="fullName"
                  render={() => <span>Full name field is required</span>}
                />
              </div>
            ) : (
              <h3>{user?.fullName}</h3>
            )}

            {!isEditMode && <Status />}

            {isUserProfileOwner && (
              <div className="profile__edit-controls-container">
                {!isEditMode && (
                  <Button
                    variant="contained"
                    className="profile__edit-button"
                    onClick={handleChangeMode}
                    type="button"
                  >
                    <EditIcon className="profile__edit-button-icon" />
                    {getChangeModeButtonDescription()}
                  </Button>
                )}

                {isEditMode && (
                  <>
                    <Button
                      variant="contained"
                      className="profile__edit-button"
                      type="submit"
                    >
                      <PublishedWithChangesIcon className="profile__edit-button-icon" />
                      {getChangeModeButtonDescription()}
                    </Button>

                    <Button
                      variant="contained"
                      className="profile__edit-button"
                      onClick={handleResetChanges}
                      type={"button"}
                    >
                      <CancelIcon className="profile__edit-button-icon" />
                      Cancel changes
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>

          <div
            className={cn(
              "profile__text-wrapper profile__text-wrapper--job",
              isEditMode && "profile__text-wrapper--edit-mode"
            )}
          >
            <div>
              <p
                className="profile__user-text"
                data-testid="profile-annotation"
              >
                {annotations.userInfo}
              </p>
              {isEditMode ? (
                <div className="profile__field profile__field--about-me">
                  <TextField
                    {...register("aboutMe")}
                    style={{ marginBottom: 15 }}
                    data-testid="about-me"
                    label="About me"
                    id="about-me"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="aboutMe"
                    render={() => <span>About me field is required</span>}
                  />

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
                </div>
              ) : (
                <p
                  className="profile__user-text"
                  data-testid="profile-template-aboutMe"
                >
                  {user?.aboutMe || templates.aboutMe}
                </p>
              )}
            </div>

            {!isEditMode && (
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

          <div
            className={cn(
              "profile__text-wrapper",
              isEditMode && "profile__text-wrapper--edit-mode"
            )}
          >
            <p className="profile__user-text" data-testid="profile-skills">
              {annotations.skills}
            </p>
            {isEditMode ? (
              <div className="profile__field profile__field--extended">
                <TextareaAutosize
                  {...register("lookingForAJobDescription")}
                  style={{ marginBottom: 15 }}
                  data-testid="looking-for-a-job-description"
                  label="Looking for a job description"
                  id="looking-for-a-job-description"
                  className="profile__textarea"
                />
                <ErrorMessage
                  errors={errors}
                  name="lookingForAJobDescription"
                  render={() => (
                    <span>Lookin for a job description is required!</span>
                  )}
                />
              </div>
            ) : (
              <p
                className="profile__user-text"
                data-testid="profile-template-lookingForJob"
              >
                {user?.lookingForAJobDescription || templates.skills}
              </p>
            )}
          </div>

          <div
            className={cn(
              "profile__text-wrapper",
              isEditMode && "profile__text-wrapper--edit-mode"
            )}
          >
            <p className="profile__user-text" data-testid="profile-contacts">
              {annotations.contacts}
            </p>

            {isEditMode ? (
              <div className="profile__links-container">
                {links.map((link, index) => {
                  return (
                    <div className="profile__field" key={index}>
                      <TextField
                        {...register(`contacts.${link}`)}
                        key={index}
                        style={{ marginBottom: 15 }}
                        data-testid={link}
                        label={link}
                        id={link}
                      />
                      <ErrorMessage
                        errors={errors}
                        name={`contacts.${link}`}
                        render={() => <span>{link} link is required!</span>}
                      />
                    </div>
                  );
                })}
              </div>
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

export default compose(
  connect(mapStateToProps, { getUserProfileData, updateUserProfile })
)(Profile);
