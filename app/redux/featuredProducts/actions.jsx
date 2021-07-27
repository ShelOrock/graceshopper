import { SET_FEATURED_PRODUCTS, RESET_FEATURED_PRODUCTS } from './constants.jsx';

export const setFeaturedProducts = payload => ({
  type: SET_FEATURED_PRODUCTS,
  payload,
});

export const resetFeaturedProducts = () => ({ type: RESET_FEATURED_PRODUCTS });
