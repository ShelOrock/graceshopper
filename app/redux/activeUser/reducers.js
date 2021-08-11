import { SET_ACTIVE_USER, RESET_ACTIVE_USER } from './constants';

const initialState = {};

export const activeUser = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return action.payload;

    case RESET_ACTIVE_USER:
      return initialState;

    default:
      return state;
  }
};
