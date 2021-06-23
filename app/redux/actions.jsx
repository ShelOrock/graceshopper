import * as allUsersActions from './allUsers/actions.jsx';
import * as activeUsersActions from './activeUser/actions.js';
import * as allProductsActions from './allProducts/actions.js';
import * as featuredProductsActions from './featuredProducts/actions.js';
import * as similarProductsActions from './similarProducts/actions.js';
import * as activeProductActions from './activeProduct/actions.js';
import * as allOrdersActions from './allOrders/actions.js';
import * as cartActions from './cart/actions.js';
import * as wishlistActions from './wishlist/actions.js';

export {
  allUsersActions,
  activeUsersActions,
  allProductsActions,
  featuredProductsActions,
  similarProductsActions,
  activeProductActions,
  allOrdersActions,
  cartActions,
  wishlistActions
};

import {
  SET_ORDER_DETAILS,
  STATUS_MESSAGE,
  LOGIN_SUCCCESS,
  LOGIN_ERROR,
  SET_CART_LIST,
  GET_GITHUB_DATA
} from './constants';

export const setOrderDetails = orderDetails => {
  return {
    type: SET_ORDER_DETAILS,
    orderDetails
  };
};

export const logInSuccess = () => {
  return {
    type: LOGIN_SUCCCESS
  };
};

export const loggedInFail = () => {
  return {
    type: LOGIN_ERROR
  };
};

export const _setCartList = items => {
  return {
    type: SET_CART_LIST,
    items
  };
};


export const statusMessage = message => {
  return {
    type: STATUS_MESSAGE,
    message
  };
};

export const gitHubData = gitHubUser => {
  return {
    type: GET_GITHUB_DATA,
    gitHubUser
  };
}; 