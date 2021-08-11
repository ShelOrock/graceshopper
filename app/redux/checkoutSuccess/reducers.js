import { SET_CHECKOUT_SUCCESS, RESET_CHECKOUT_SUCCESS } from './constants';

const initialState = false;

export const checkoutSuccess = (state = initialState, action) => {
  switch(action.type) {
    case SET_CHECKOUT_SUCCESS:
      return action.payload;

    case RESET_CHECKOUT_SUCCESS:
      return initialState;

    default:
      return state;
  };
};
