import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import * as Pages from './components/Pages';
import Navigation from './components/Organisms/Navigation';

import {
  activeUserThunks,
  allProductsThunks,
  featuredProductsThunks,
  popularProductsThunks,
  cartThunks,
  wishlistThunks,
  allOrdersThunks
} from './redux/thunks';

const Root = () => {

  const dispatch = useDispatch();

  const {
    activeUser,
    cart: { cartItems },
    wishlist: { products },
    allOrders
  } = useSelector(state => state);

  useEffect(() => {
    const sessionId = document.cookie
      .split(';')
      .find(str => /sessionId=/.test(str))
      .replace(/sessionId=/, (''))
      .replace(' ', '');
    dispatch(activeUserThunks.getActiveUser(sessionId));
    dispatch(allProductsThunks.getAllProducts());
    dispatch(featuredProductsThunks.getFeaturedProducts());
    dispatch(popularProductsThunks.getPopularProducts());
  }, []);
  useEffect(() => {
    if(activeUser.id) {
      dispatch(cartThunks.getCart(activeUser.id));
      dispatch(wishlistThunks.getWishlist(activeUser.id));
      dispatch(allOrdersThunks.getAllOrders(activeUser.id));
    };
  }, [activeUser]);

  return (
    <Router>
      <Navigation />
      {/* <ToastComponent status={status} message={text} /> */}
      <Switch>
        <Route exact path='/' component={ Pages.Home } />
        <Route exact path='/login'>
          { activeUser.isLoggedIn
          ? <Redirect to='/' />
          : <Pages.Login />
          } 
        </Route>
        <Route exact path='/signup'>
          { activeUser.isLoggedIn
          ? <Redirect to='/' />
          : <Pages.Signup />
          }
        </Route>
        <Route exact path='/shop' component={ Pages.Shop } />
        <Route exact path='/products/:productId' component={ Pages.Product } />
        <Route exact path='/cart'>
          { cartItems.length
          ? <Pages.Cart />
          : <Pages.EmptyCart />
          }
        </Route>
        <Route exact path='/wishlist'>
          { products.length
          ? <Pages.Wishlist />
          : <Pages.EmptyWishlist />
          }
        </Route>
        <Route exact path='/checkout'>
          { cartItems.length
          ? <Pages.Checkout />
          : <Redirect to='/' />
          }
        </Route>
        <Route exact path='/order-history'>
          { activeUser.isLoggedIn
          ? allOrders.length
            ? <Pages.OrderHistory />
            : <Pages.EmptyOrderHistory />
          : <Redirect to='/' />
          }
        </Route>
        <Route exact path='/order-history/:orderId'>
          { activeUser.isLoggedIn
          ? <Pages.Order />
          : <Redirect to='/' />
          }
        </Route>
        <Route exact path='/confirmation' component={ Pages.Confirmation } />
        <Route component={ Pages.NotFound } />
        {/* <Route exact path="/products/add" component={AddProductForm} /> */}
      </Switch>
    </Router>
  );
};

export default Root;
