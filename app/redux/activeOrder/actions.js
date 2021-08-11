import { SET_ACTIVE_ORDER, RESET_ACTIVE_ORDER } from './constants';

export const setActiveOrder = payload => ({
  type: SET_ACTIVE_ORDER,
  payload
});

export const resetActiveOrder = () => ({ type: RESET_ACTIVE_ORDER });
