import axios from 'axios';

import * as reduxActions from '../actions.jsx';
const { similarProductsActions: { setSimilarProducts} } = reduxActions;

const API_URL = '/api/products';

export const getSimilarProducts = (tags, productId) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/similar`, { tags, productId })
      .then(res => dispatch(setSimilarProducts(res.data)))
      .catch(e => console.error(e));
  };
};
