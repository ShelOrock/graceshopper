import { SET_SIMILAR_PRODUCTS, RESET_SIMILAR_PRODUCTS } from './constants.jsx';

const initialState = [];

export const similarProducts = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIMILAR_PRODUCTS:
      return action.payload;

    case RESET_SIMILAR_PRODUCTS:
      return initialState;

    default:
      return state;
  }
};
