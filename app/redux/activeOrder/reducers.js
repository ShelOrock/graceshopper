import { SET_ACTIVE_ORDER, RESET_ACTIVE_ORDER } from './constants';

const initialState = {
  cartItems: [],
};

export const activeOrder = (state = initialState, action) => {
  switch(action.type) {
    case SET_ACTIVE_ORDER:
      return action.payload;

    case RESET_ACTIVE_ORDER:
      return initialState;

    default:
      return state;
  };
};
