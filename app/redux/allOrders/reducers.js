import { SET_ALL_ORDERS, RESET_ALL_ORDERS } from './constants.js';

const initialState = [];

export const allOrders = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_ORDERS:
      return action.payload;

    case RESET_ALL_ORDERS:
      return initialState;

    default:
      return state;
  }
};
