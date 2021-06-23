import { SET_ACTIVE_USER, RESET_ACTIVE_USER } from './constants.jsx';

export const setUser = payload => ({
  type: SET_ACTIVE_USER,
  payload
});

export const resetUser = () => ({ type: RESET_ACTIVE_USER });
