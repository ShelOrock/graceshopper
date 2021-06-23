import axios from 'axios';

import * as reduxActions from './actions.jsx';
const { featuredProductsActions: { setFeaturedProducts } } = reduxActions;

const API_URL = '/api/products';

export const getFeaturedProducts = () => {
  return dispatch => {
    return axios
      .get(`${ API_URL }`)
      .then(res => dispatch(setFeaturedProducts(res.data)))
      .catch(e => console.error(e))
  };
};