import { SET_ACTIVE_PRODUCT, RESET_ACTIVE_PRODUCT } from './constants.jsx';

const initialState = {};

export const activeProduct = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PRODUCT:
      return action.payload;

    case RESET_ACTIVE_PRODUCT:
      return initialState;

    default:
      return state;
  }
};
