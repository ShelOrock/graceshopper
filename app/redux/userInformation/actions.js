import { SET_USER_INFORMATION, RESET_USER_INFORMATION } from './constants';

export const setUserInformation = payload => ({
  type: SET_USER_INFORMATION,
  payload
});

export const resetUserInformation = () => ({ type: RESET_USER_INFORMATION });
