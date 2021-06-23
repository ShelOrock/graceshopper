import {
  SET_ORDER_DETAILS,
  LOGIN_SUCCCESS,
  LOGIN_ERROR,
  SET_CART_LIST,
  REMOVE_ITEM_FROM_CART,
  STATUS_MESSAGE,
  SET_SIMILAR_PRODUCTS,
  SET_FEATURED_PRODUCTS,
  GET_GITHUB_DATA
} from './constants';

export const similarProducts = (state = [], action) => {
  switch (action.type) {
    case SET_SIMILAR_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export const featuredProducts = (state = [], action) => {
  switch (action.type) {
    case SET_FEATURED_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}

export const orderDetails = (state = [], action) => {
  switch (action.type) {
    case SET_ORDER_DETAILS:
      return action.orderDetails;
    default:
      return state;
  }
};

export const authentication = (
  state = { authError: null, logInStatus: null },
  action
) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login Failed',
        logInStatus: false
      };
    case LOGIN_SUCCCESS:
      return {
        ...state,
        authError: null,
        logInStatus: true
      };
    default:
      return state;
  }
};

export const cartList = (state = [], action) => {
  switch (action.type) {
    case SET_CART_LIST:
      return action.items;
    case REMOVE_ITEM_FROM_CART:
      return state.filter(item => item.id !== action.selectedItem.id);
    default:
      return state;
  }
};

export const statusMessage = (state = { status: null, text: '' }, action) => {
  switch (action.type) {
    case STATUS_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export const gitHubData = (state = {}, action) => {
  switch (action.type) {
    case GET_GITHUB_DATA:
      return action.gitHubUser
    default:
      return state;
  }
}; 