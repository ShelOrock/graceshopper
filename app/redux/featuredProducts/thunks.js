import axios from 'axios';

import * as reduxActions from '../actions';
const { featuredProductsActions: { setFeaturedProducts } } = reduxActions;

const API_URL = '/api/products';

export const getFeaturedProducts = () => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/featured`)
      .then(res => dispatch(setFeaturedProducts(res.data)))
      .catch(e => console.error('Error', e))
  };
};