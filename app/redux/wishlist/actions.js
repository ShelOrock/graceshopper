import { SET_WISHLIST, RESET_WISHLIST } from './constants.js';

export const setWishlist = payload => ({
  type: SET_WISHLIST,
  payload
});

export const resetWishlist = () => ({ type: RESET_WISHLIST });
