import { SET_ALL_USERS, RESET_ALL_USERS } from "./constants.jsx";

export const setAllUsers = payload => ({
  type: SET_ALL_USERS,
  payload
});

export const resetAllUsers = () => ({ type: RESET_ALL_USERS });
