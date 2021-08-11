import { SET_USER_INFORMATION, RESET_USER_INFORMATION } from './constants';

const initalState = {
  name: '',
  email: ''
};

export const userInformation = (state = initalState, action) => {
  switch(action.type) {
    case SET_USER_INFORMATION:
      return action.payload
    
    case RESET_USER_INFORMATION:
      return initalState;

    default:
      return state;
  };
};
