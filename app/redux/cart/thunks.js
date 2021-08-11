import axios from 'axios';

import * as reduxActions from '../actions';
const { cartActions: { setCart } } = reduxActions;

import { removeFromWishlist } from '../wishlist/thunks';

const API_URL = '/api/cart'

export const getCart = userId => {
  return dispatch => {
    return axios
      .get(`${ API_URL }/${ userId }`)
      .then(res => dispatch(setCart(res.data)))
      .catch(e => console.error(e));
  };
};

export const addProductToCart = (userId, payload) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/${ userId }/addProduct`, payload)
      .then(() => dispatch(removeFromWishlist(userId, payload)))
      .then(() => dispatch(getCart(userId)))
      .catch(e => console.error(e));
  };
};

export const removeProductFromCart = (userId, payload) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/${ userId }/removeProduct `, payload)
      .then(() => dispatch(getCart(userId)))
      .catch(e => console.error(e));
  };
};

export const updateProductInCart = (userId, payload) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/${ userId }/updateCartItem`, payload)
      .then(() => dispatch(getCart(userId)))
      .catch(e => console.error(e));
  }
}

export const createCart = userId => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/createCart`, { userId })
      .then(() => dispatch(getCart(userId)))
      .catch(e => console.error(e));
  };
};

export const deleteCart = userId => {
  return dispatch => {
    return axios
      .delete(`${ API_URL }/${ userId }`)
      .then(() => dispatch(createCart(userId)))
      .catch(e => console.error(e));
  };
};
