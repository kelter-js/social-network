import { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import getUserStatus from "../../thunk/getUserStatus";
import updateUserStatus from "../../thunk/updateUserStatus";
import {
  getCurrentId,
  getCurrentUserStatus,
  getUserId,
} from "../../state/selectors/userSelectors";

const mapStateToProps = (state) => {
  return {
    id: getCurrentId(state),
    status: getCurrentUserStatus(state),
    userId: getUserId(state),
  };
};

const Status = ({ status, id, getUserStatus, updateUserStatus, userId }) => {
  const [showStatus, setShowStatus] = useState(true);
  const [statusValue, setStatusValue] = useState(status);
  const statusBar = useRef(null);

  const isUserProfileOwner = userId === id;

  const clickHandler = (e) => {
    if (isUserProfileOwner) {
      if (!statusBar.current) {
        setShowStatus(true);
        setStatusValue(status);
      } else {
        setShowStatus(e.target !== statusBar.current);
      }
    }
  };

  useEffect(() => setStatusValue(status), [status]);

  useEffect(() => {
    if (id) {
      getUserStatus(id);
    }
  }, [id]);

  useEffect(() => {
    if (isUserProfileOwner) {
      document.addEventListener("click", clickHandler);
      return () => document.removeEventListener("click", clickHandler);
    }
  }, [isUserProfileOwner]);

  const onChange = (e) => {
    setStatusValue(e.target.value);
  };

  const onClick = () => {
    updateUserStatus(statusValue, userId);
    setShowStatus(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showStatus && isUserProfileOwner && e.key === "Enter") {
        e.stopPropagation();
        e.preventDefault();
        onClick();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showStatus, statusValue]);

  return showStatus ? (
    <p
      data-testid="profile-status"
      ref={statusBar}
      className="profile__status-text"
      style={userId === id ? { cursor: "pointer" } : { cursor: "unset" }}
    >
      {status ?? ""}
    </p>
  ) : (
    <div
      data-testid="change-status-container"
      className="profile__status-change-container"
      onClick={(e) => e.stopPropagation()}
    >
      <div style={{ width: "100%" }}>
        <input type="text" onChange={onChange} autoFocus value={statusValue} />
        <button
          data-testid="apply-status-changes"
          type="button"
          onClick={onClick}
        >
          Save changes
        </button>
      </div>
    </div>
  );
};

export const StatusComponent = Status;

export default compose(
  connect(mapStateToProps, { getUserStatus, updateUserStatus })
)(Status);
