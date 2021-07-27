import axios from 'axios';

import * as reduxActions from '../actions.jsx';
const { popularProductsActions: { setPopularProducts} } = reduxActions;

const API_URL = '/api/products';

export const getPopularProducts = () => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/popular`)
      .then(res => dispatch(setPopularProducts(res.data)))
      .catch(e => console.error(e));
  };
};
