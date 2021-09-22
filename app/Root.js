import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import * as Pages from './components/Pages';
import { Navigation } from './components/Organisms';

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
    allOrders,
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
      <Navigation
        dispatch={ dispatch }
      />
      {/* <ToastComponent status={status} message={text} /> */}
      <Switch>
        <Route exact path='/'>
          <Pages.HomePage />
        </Route>
        <Route exact path='/login'>
          { activeUser.isLoggedIn
          ? <Redirect to='/' />
          : <Pages.LoginPage />
          } 
        </Route>
        <Route exact path='/signup'>
          { activeUser.isLoggedIn
          ? <Redirect to='/' />
          : <Pages.SignupPage />
          }
        </Route>
        <Route exact path='/shop'>
          <Pages.ShopPage />
        </Route>
        <Route exact path='/products/:productId'>
          <Pages.ProductPage />
        </Route>
        <Route exact path='/cart'>
          { cartItems.length
          ? <Pages.CartPagePage />
          : <Pages.EmptyCartPage />
          }
        </Route>
        <Route exact path='/wishlist'>
          { products.length
          ? <Pages.WishlistPage />
          : <Pages.EmptyWishlistPage />
          }
        </Route>
        <Route exact path='/checkout'>
          { cartItems.length
          ? <Pages.CheckoutPage />
          : <Redirect to='/' />
          }
        </Route>
        <Route exact path='/confirmation'>
          { cartItems.length
          ? <Pages.CheckoutPage />
          : <Redirect to='/' />
          }
        </Route>
        <Route exact path='/order-history'>
          { activeUser.isLoggedIn
          ? allOrders.length
            ? <Pages.OrderHistoryPage />
            : <Pages.EmptyOrderHistoryPage />
          : <Redirect to='/' />
          }
        </Route>
        <Route exact path='/order-history/:orderId'>
          { activeUser.isLoggedIn
          ? <Pages.OrderPage />
          : <Redirect to='/' />
          }
        </Route>
        <Route>
          <Pages.NotFoundPage />
        </Route>
        {/* <Route exact path="/products/add" component={AddProductForm} /> */}
      </Switch>
    </Router>
  );
};

export default Root;
