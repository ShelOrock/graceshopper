import { SET_SIMILAR_PRODUCTS, RESET_SIMILAR_PRODUCTS } from './constants.jsx';

export const setSimilarProducts = payload => ({
  type: SET_SIMILAR_PRODUCTS,
  payload
});

export const resetSimilarProducts = () => ({ types: RESET_SIMILAR_PRODUCTS });
