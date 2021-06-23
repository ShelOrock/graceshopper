import axios from 'axios';

import * as reduxActions from '../actions.jsx';
const { allUsersActions: { setAllUsers } } = reduxActions;

const API_URL = '/api/users';

export const getAllUsers = () => {
  return dispatch => {
    return axios
      .post(`${ API_URL }/`)
      .then(res => dispatch(setAllUsers(res.data)))
      .catch(e => console.error(e));
  };
};