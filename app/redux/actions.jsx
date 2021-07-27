import * as allUsersActions from './allUsers/actions.jsx';
import * as activeUserActions from './activeUser/actions.jsx';
import * as allProductsActions from './allProducts/actions.jsx';
import * as featuredProductsActions from './featuredProducts/actions.jsx';
import * as popularProductsActions from './popularProducts/actions.jsx';
import * as similarProductsActions from './similarProducts/actions.jsx';
import * as activeProductActions from './activeProduct/actions.jsx';
import * as allOrdersActions from './allOrders/actions.jsx';
import * as cartActions from './cart/actions.jsx';
import * as wishlistActions from './wishlist/actions.jsx';
import * as cartPreviewActions from './cartPreview/actions.jsx';

export {
  allUsersActions,
  activeUserActions,
  allProductsActions,
  featuredProductsActions,
  popularProductsActions,
  similarProductsActions,
  activeProductActions,
  allOrdersActions,
  cartActions,
  wishlistActions,
  cartPreviewActions
};

// import {
//   SET_ORDER_DETAILS,
//   STATUS_MESSAGE,
//   LOGIN_SUCCCESS,
//   LOGIN_ERROR,
//   SET_CART_LIST,
//   GET_GITHUB_DATA
// } from './constants';

// export const setOrderDetails = orderDetails => {
//   return {
//     type: SET_ORDER_DETAILS,
//     orderDetails
//   };
// };

// export const logInSuccess = () => {
//   return {
//     type: LOGIN_SUCCCESS
//   };
// };

// export const loggedInFail = () => {
//   return {
//     type: LOGIN_ERROR
//   };
// };

// export const _setCartList = items => {
//   return {
//     type: SET_CART_LIST,
//     items
//   };
// };


// export const statusMessage = message => {
//   return {
//     type: STATUS_MESSAGE,
//     message
//   };
// };

// export const gitHubData = gitHubUser => {
//   return {
//     type: GET_GITHUB_DATA,
//     gitHubUser
//   };
// }; 