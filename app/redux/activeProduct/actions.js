import { SET_ACTIVE_PRODUCT, RESET_ACTIVE_PRODUCT } from './constants';

export const setActiveProduct = payload => ({
  type: SET_ACTIVE_PRODUCT,
  payload
});

export const resetActiveProduct = () => ({ type: RESET_ACTIVE_PRODUCT });
