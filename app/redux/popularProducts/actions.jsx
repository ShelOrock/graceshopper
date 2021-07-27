import { SET_POPULAR_PRODUCTS, RESET_POPULAR_PRODUCTS } from './constants.jsx';

export const setPopularProducts = payload => ({
  type: SET_POPULAR_PRODUCTS,
  payload
});

export const resetPopularProducts = () => ({ type: RESET_POPULAR_PRODUCTS });
