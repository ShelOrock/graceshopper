import * as React from 'react';
const { useEffect } = React;
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import HomePage from './HomePage/index.jsx';
import Navigation from './Navigation/index.jsx';
import Login from './Authentication/LoginPage/index.jsx';
import Signup from './Authentication/SignupPage/index.jsx';
import ShopPage from './ShopPage/index.jsx'
import ProductPage from './ProductPage/index.jsx';
import CartPage from './CartPage/index.jsx';
import CheckoutPage from './CheckoutPage/index.jsx';

// import { createUser } from '../redux/thunks/UserThunks';
// import { createCart } from '../redux/thunks/CartThunks';
// import ProductPage from './ProductPage';
// import Receipt from './Receipt';
// import Gallery from './PhotoGallery';
// import Wishlist from './Wishlist';
// import ToastComponent from './Toasts';
// import StripeCheckout from './StripeCheckout';

// import AddProductForm from './AddProductForm';
// import PhotoGallery from './PhotoGallery';
// import UserOrderHistory from './UserOrderHistory';

import * as reduxThunks from '../redux/thunks.jsx';
const {
  activeUserThunks: { getActiveUser },
  cartThunks: { getCart },
  allProductsThunks: { getAllProducts },
  featuredProductsThunks: { getFeaturedProducts },
  popularProductsThunks: { getPopularProducts }
} = reduxThunks; 

export default () => {

  const dispatch = useDispatch();

  const { activeUser } = useSelector(state => state);

  useEffect(() => {
    dispatch(getActiveUser(document.cookie.replace(/sessionId=/, '')));
    dispatch(getAllProducts());
    dispatch(getFeaturedProducts());
    dispatch(getPopularProducts());
  }, []);
  useEffect(() => {
    if(activeUser.id) {
      dispatch(getCart(activeUser.id))
    }
  }, [activeUser]);

  return (
    <Router>
      <Navigation />
      {/* <ToastComponent status={status} message={text} /> */}
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/login' component={ Login } />
        <Route exact path="/signup" component={ Signup } />
        <Route exact path='/shop' component={ ShopPage } />
        <Route exact path='/products/:productId' component={ ProductPage } />
        <Route exact path='/cart' component={ CartPage } />
        <Route exact path='/checkout' component={ CheckoutPage } />
        {/* <Route exact path="/products/add" component={AddProductForm} /> */}
        {/*
        <Route exact path="/gallery" component={Gallery} />
        
        <Route exact path="/receipt" component={Receipt} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route exact path="/user/:id" component={UserOrderHistory} />
        <Route exact path="/photo-booth" component={PhotoGallery} /> */}
        <Redirect to='/'/>
      </Switch>
    </Router>
  );
};
