import { securityAPI } from "../API/api";
import { setCaptchaUrl } from "../state/userDataReducer";

export const getCaptchaUrl = async () => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();

    if (response.data.url) {
      dispatch(setCaptchaUrl(response.data.url));
    }
  };
};
