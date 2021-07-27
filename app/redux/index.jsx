import { combineReducers } from 'redux';

import { activeUser } from './activeUser/reducers.jsx';
import { cart } from './cart/reducers.jsx';
import { allProducts } from './allProducts/reducers.jsx';
import { activeProduct } from './activeProduct/reducers.jsx';
import { featuredProducts } from './featuredProducts/reducers.jsx';
import { popularProducts } from './popularProducts/reducers.jsx';
import { similarProducts } from './similarProducts/reducers.jsx';
import { cartPreview } from './cartPreview/reducers.jsx';

export default combineReducers({
  activeUser,
  cart,
  allProducts,
  activeProduct,
  featuredProducts,
  popularProducts,
  similarProducts,
  cartPreview
});
