import { SET_FEATURED_PRODUCTS, RESET_FEATURED_PRODUCTS } from './constants';

const initialState = [];

export const featuredProducts = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEATURED_PRODUCTS:
      return action.payload;

    case RESET_FEATURED_PRODUCTS:
      return initialState;

    default:
      return state;
  }
};
