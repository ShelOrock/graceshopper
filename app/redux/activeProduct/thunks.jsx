import axios from 'axios';

import * as reduxActions from '../actions';
const { activeProductActions: { setActiveProduct } } = reduxActions;

const API_URL = '/api/products'

export const getActiveProduct = productId => {
  return dispatch => {
    return axios
      .get(`${ API_URL }/${ productId }`)
      .then(res => dispatch(setActiveProduct(res.data)))
      .catch(e => console.error(e));
  };
};