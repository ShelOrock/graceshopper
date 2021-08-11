import axios from 'axios';

import * as reduxActions from '../actions';
const { allUsersActions: { setAllUsers } } = reduxActions;

const API_URL = '/api/users';

export const getAllUsers = () => {
  return dispatch => {
    return axios
      .get(`${ API_URL }/`)
      .then(res => dispatch(setAllUsers(res.data)))
      .catch(e => console.error(e));
  };
};