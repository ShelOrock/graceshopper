import { SET_CHECKOUT_SUCCESS, RESET_CHECKOUT_SUCCESS } from "./constants";

export const setCheckoutSuccess = payload => ({
  type: SET_CHECKOUT_SUCCESS,
  payload
});

export const resetCheckoutSuccess = () => ({ type: RESET_CHECKOUT_SUCCESS })