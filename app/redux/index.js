import { combineReducers } from 'redux';

import { activeUser } from './activeUser/reducers';
import { cart } from './cart/reducers';
import { wishlist } from './wishlist/reducers';
import { allProducts } from './allProducts/reducers';
import { activeProduct } from './activeProduct/reducers';
import { featuredProducts } from './featuredProducts/reducers';
import { popularProducts } from './popularProducts/reducers';
import { similarProducts } from './similarProducts/reducers';
import { allOrders } from './allOrders/reducers';
import { activeOrder } from './activeOrder/reducers';
import { cartPreview } from './cartPreview/reducers';
import { checkoutSuccess } from './checkoutSuccess/reducers';

export default combineReducers({
  activeUser,
  cart,
  wishlist,
  allProducts,
  activeProduct,
  featuredProducts,
  popularProducts,
  similarProducts,
  allOrders,
  activeOrder,
  cartPreview,
  checkoutSuccess
});
