import { authAPI } from "../api/api";

const initState = {
  id: null,
  login: null,
  email: null,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...payload.data,
      };

    default:
      return state;
  }
};

export default authReducer;

const SET_USER_DATA = "SET_USER_DATA";

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  payload: { data },
});

export const authMe = () => (dispatch) => {
  authAPI.authMe().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserData(data.data));
    }
  });
};
