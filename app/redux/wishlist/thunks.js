import axios from 'axios';

import * as reduxActions from '../actions';
const { wishlistActions: { setWishlist } } = reduxActions;

const API_URL = '/api/wishlist';

export const getWishlist = userId => {
  return dispatch => {
    return axios
      .get(`${ API_URL }/${ userId }`)
      .then(res => dispatch(setWishlist(res.data)))
      .catch(e => console.error(e));
  };
};

export const addToWishlist = (userId, payload) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/${ userId }/add`, payload)
      .then(() => dispatch(getWishlist(userId)))
      .catch(e => console.error(e));
  };
};

export const removeFromWishlist = (userId, payload) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/${ userId }/remove`, payload)
      .then(() => dispatch(getWishlist(userId)))
      .catch(e => console.error(e));
  };
};
