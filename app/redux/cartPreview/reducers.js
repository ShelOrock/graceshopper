import { SET_CART_PREVIEW, RESET_CART_PREVIEW } from './constants';

const initialState = false;

export const cartPreview = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_PREVIEW:
      return action.payload;

    case RESET_CART_PREVIEW:
      return initialState;

    default:
      return state;
  };
};
