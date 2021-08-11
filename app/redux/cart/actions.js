import { SET_CART, RESET_CART } from './constants';

export const setCart = payload => ({
  type: SET_CART,
  payload
});

export const resetCart = () => ({ type: RESET_CART });
