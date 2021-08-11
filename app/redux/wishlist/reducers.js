import { SET_WISHLIST, RESET_WISHLIST } from './constants';

const initialState = {
  products: []
};

export const wishlist = (state = initialState, action) => {
  switch (action.type) {
    case SET_WISHLIST:
      return action.payload;

    case RESET_WISHLIST:
      return initialState;

    default:
      return state;
  };
};
