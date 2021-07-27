import { SET_POPULAR_PRODUCTS, RESET_POPULAR_PRODUCTS } from './constants.jsx';

const initialState = [];

export const popularProducts = (state = initialState, action) => {
  switch(action.type) {
    case SET_POPULAR_PRODUCTS:
      return action.payload;

    case RESET_POPULAR_PRODUCTS:
      return initialState;

    default:
      return state;
  };
};
