import axios from 'axios';

import * as reduxActions from '../actions';
const { activeUserActions: { setActiveUser, resetActiveUser } } = reduxActions;

const API_URL = '/api/authentication'

export const attemptUserLogin = credentials => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/login`, credentials)
      .then(res => dispatch(setActiveUser(res.data)))
      .catch(e => {
        console.error(e)
        dispatch(resetActiveUser());
      });
  };
};

export const attemptUserLogout = userId => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/logout`, { userId })
      .then(res => dispatch(setActiveUser(res.data)))
      .catch(e => console.error(e));
  };
};

export const attemptUserSignup = credentials => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/signup`, credentials)
      .then(res => dispatch(setActiveUser(res.data)))
      .catch(e => console.log(e));
  };
};
