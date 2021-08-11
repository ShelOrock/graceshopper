import { SET_SHIPPING, RESET_SHIPPING } from './constants';

export const setShipping = payload => ({
  type: SET_SHIPPING,
  payload
});

export const resetShipping = () => ({ type: RESET_SHIPPING });
