import axios from 'axios';

import * as reduxActions from '../actions';
const {
  allOrdersActions: { setAllOrders },
  activeOrderActions: { setActiveOrder }
} = reduxActions;

const API_URL = '/api/orders';

export const getAllOrders = userId => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/`, { userId })
      .then(res => dispatch(setAllOrders(res.data)))
      .catch(e => console.log(e));
  };
};

export const createOrder = (userId, payload) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/create-order`, payload)
      .then(res => {
        dispatch(setActiveOrder(res.data));
        dispatch(getAllOrders(userId));
      })
      .catch(e => console.log(e));
  };
};