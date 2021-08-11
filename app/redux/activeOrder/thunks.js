import axios from 'axios';

import * as reduxActions from '../actions';
const { activeOrderActions: { setActiveOrder } } = reduxActions;

const API_URL = '/api/orders';

export const getActiveOrder = orderId => {
  return dispatch => {
    return axios
      .get(`${ API_URL }/${ orderId }`)
      .then(res => dispatch(setActiveOrder(res.data)))
      .catch(e => console.error(e));
  };
};
