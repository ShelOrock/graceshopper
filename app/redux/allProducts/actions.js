import { SET_ALL_PRODUCTS, RESET_ALL_PRODUCTS } from './constants.js';

export const setAllProducts = payload => ({
  type: SET_ALL_PRODUCTS,
  payload
});

export const resetAllProducts = () => ({ type: RESET_ALL_PRODUCTS });
