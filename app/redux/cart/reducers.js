import { SET_CART, RESET_CART } from './constants';

const initialState = {
  cartItems: []
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return action.payload;

    case RESET_CART:
      return initialState;

    default:
      return state;
  }
};
