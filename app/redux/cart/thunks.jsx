import axios from 'axios';

import * as reduxActions from '../actions.jsx';
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

export const addProductToCart = (userId, productId, quantity = 1) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/${ userId }/addProduct`, { productId, quantity })
      .then(() => dispatch(getCart(userId)))
      .catch(e => console.error(e));
  };
};

export const removeProductFromCart = (userId, cartItemId) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/${ userId }/removeProduct `, { cartItemId })
      .then(() => dispatch(getCart(userId)))
      .catch(e => console.error(e));
  };
};

export const updateProductInCart = (userId, productId, quantity) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/${ userId }/updateCartItem`, { productId, quantity })
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
