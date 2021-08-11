import { SET_ALL_USERS, RESET_ALL_USERS } from "./constants";

const initialState = [];

export const allUsers = (state = initialState, action) => {
  switch(action.type) {
    case SET_ALL_USERS:
      return action.payload;

    case RESET_ALL_USERS:
      return initialState;

    default:
      return state;
  };
};
