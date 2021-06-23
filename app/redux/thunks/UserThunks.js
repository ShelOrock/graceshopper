import axios from 'axios';

import { setUser, logInSuccess, statusMessage, gitHubData } from '../actions';

import { SUCCESS, FAIL, COMMON_FAIL } from './utils';

//Thunk for creating a user
//Sets the user to the created user after creating
export const createUser = user => {
  return dispatch => {
    return axios
      .post(`/api/users/new`, user)
      .then(res => {
        dispatch(setUser(res.data));
      })
      .then(() => {
        dispatch(
          statusMessage({
            status: SUCCESS,
            text: 'Welcome to Juuls by Jewel'
          })
        );
      })
      .catch(() => {
        dispatch(
          statusMessage({
            status: FAIL,
            text: 'There was an error signing you up. Try again later.'
          })
        );
      });
  };
};

//Thunk for logging out a user.
//Sets the user to null after logging out.
export const logoutUser = userId => {
  return dispatch => {
    return axios
      .post(`/api/users/logout/${userId}`)
      .then(guest => {
        console.log(guest);
        console.log(guest.data);
        dispatch(setUser(guest.data));
      })
      .catch(e => console.error('Error logging user out', e));
  };
};

//Thunks for getting GitHub user data on the API
export const getGitHubData = () => dispatch => {
  axios.get('/api/github/user')
    .then(res => {
      dispatch(gitHubData(res.data));
    })
    .catch(e => {
      console.error(e);
    });
};
