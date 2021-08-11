import { SET_ALL_ORDERS, RESET_ALL_ORDERS } from './constants';

export const setAllOrders = payload => ({
  type: SET_ALL_ORDERS,
  payload
});

export const resetAllOrders = () => ({ type: RESET_ALL_ORDERS });
