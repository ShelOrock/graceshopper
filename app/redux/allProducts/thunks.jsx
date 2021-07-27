import axios from 'axios';

import * as reduxActions from '../actions.jsx';
const { allProductsActions: { setAllProducts } } = reduxActions;

const API_URL = '/api/products';

export const getAllProducts = (limit = 4, page = 0) => {
  return dispatch => {
    return axios
      .get(`${ API_URL }/limit/${ limit }/page/${ page }`)
      .then(res => dispatch(setAllProducts(res.data)))
      .catch(e => console.error(e))
  };
};