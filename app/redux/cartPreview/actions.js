import { SET_CART_PREVIEW, RESET_CART_PREVIEW } from './constants';

export const setCartPreview = payload => ({
  type: SET_CART_PREVIEW,
  payload
});

export const resetCartPreview = () => ({ type: RESET_CART_PREVIEW });
