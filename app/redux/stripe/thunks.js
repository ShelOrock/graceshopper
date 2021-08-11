import axios from 'axios';

import * as reduxActions from '../actions';
const { checkoutSuccessActions: { setCheckoutSuccess } } = reduxActions;

import * as reduxThunks from '../thunks';
const {
  allOrdersThunks: { createOrder },
  cartThunks: { deleteCart },
} = reduxThunks;

const API_URL = '/api/stripe'

export const attemptCardPayment = (
  stripe,
  payment_method,
  userId,
  payload,
) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/create-payment-intent`, payload)
      .then(res => stripe.confirmCardPayment(res.data.client_secret, { payment_method }))
      .then(() => {
        dispatch(createOrder({
          userId,
          shipping: payload.shipping,
          amoung: payload.amount,
          cartItems: payload.cartItems
        }));
      })
      .then(() => {
        dispatch(deleteCart(userId));
        dispatch(setCheckoutSuccess(true));
      })
      .catch(e => {
        dispatch(setCheckoutSuccess(false));
        console.error(e);
      });
  };
};
