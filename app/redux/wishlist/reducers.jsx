import { SET_WISHLIST, RESET_WISHLIST } from './constants.jsx';

const initialState = [];

export const wishlist = (state = initialState, action) => {
  switch (action.tyoe) {
    case SET_WISHLIST:
      return action.payload;

    case RESET_WISHLIST:
      return initialState;

    default:
      return state;
  }
};
