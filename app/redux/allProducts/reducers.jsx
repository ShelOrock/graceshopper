import { SET_ALL_PRODUCTS, RESET_ALL_PRODUCTS } from './constants.jsx';

const initialState = {
  count: 0,
  rows: []
};

export const allProducts = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      return action.payload;

    case RESET_ALL_PRODUCTS:
      return initialState;

    default:
      return state;
  };
};
