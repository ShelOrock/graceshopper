import axios from 'axios';
import { useStripe } from '@stripe/react-stripe-js';

import * as reduxThunks from '../thunks.jsx';
const { cartThunks: { deleteCart } } = reduxThunks;

const API_URL = '/api/stripe'

export const attemptCardPayment = (stripe, payload, userId) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/create-payment-intent`, { payload })
      .then(res => stripe.handleCardPayment(res.data.client_secret))
      .then(() => dispatch(deleteCart(userId)))
      .catch(e => console.error(e));
  };
};
