import axios from 'axios';

import * as reduxActions from '../actions';
const { activeUserActions: { setActiveUser, resetActiveUser } } = reduxActions;

const API_URL = '/api/users';

export const getActiveUser = userId => {
  return dispatch => {
    return axios
      .get(`${ API_URL }/${ userId }`)
      .then(res => dispatch(setActiveUser(res.data)))
      .catch(e => console.error(e));
  };
};

export const updateActiveUser = (userId, updatedUser) => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/${ userId }`, updatedUser)
      .then(res => dispatch(setActiveUser(res.data)))
      .catch(e => console.log(e));
  };
};

export const deleteActiveUser = userId => {
  return dispatch => {
    return axios
      .delete(`${ API_URL }/${ userId }`)
      .then(() => dispatch(resetActiveUser()))
      .catch(e => console.error(e));
  };
};
