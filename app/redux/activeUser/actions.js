import { SET_ACTIVE_USER, RESET_ACTIVE_USER } from './constants';

export const setActiveUser = payload => ({
  type: SET_ACTIVE_USER,
  payload
});

export const resetActiveUser = () => ({ type: RESET_ACTIVE_USER });
