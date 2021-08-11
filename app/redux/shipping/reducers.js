import { SET_SHIPPING, RESET_SHIPPING } from './constants';

const initalState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: ''
};

export const shipping = (state = initalState, action) => {
  switch(action.type) {
    case SET_SHIPPING:
      return action.payload
    
    case RESET_SHIPPING:
      return initalState;

    default:
      return state;
  };
};
