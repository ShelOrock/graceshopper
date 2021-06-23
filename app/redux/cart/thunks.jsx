import axios from 'axios';

import * as reduxActions from './actions.js';
const { cartActions: { setCart } } = reduxActions;

const API_URL = '/api/cart'

export const getCart = userId => {
  return dispatch => {
    return axios
      .get(`${ API_URL }/${ userId }`)
      .then(res => dispatch(setCart(res.data)))
      .catch(e => console.error(e));
  };
};