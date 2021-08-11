import * as React from 'react';
const { useEffect } = React;
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import NavLogo from '/public/img/logo.png'
import Cart from '/public/img/cart.png'

import NavigationContainer from '../Containers/Navigation/Navigation';
import LinksContainer from '../Containers/Navigation/Links';
import IconTextContainer from '../Containers/IconText';
import Preview from './Preview';
import EmptyPreview from '../Molecules/EmptyPreview';
import Link from '../Atoms/Link';
import NavigationButton from '../Atoms/NavigationButton';
import Logo from '../Atoms/Logo';
import DispatchButton from '../Atoms/DispatchButton';
import Icon from '../Atoms/Icon';
import SmallBody from '../Atoms/SmallBody';

import * as reduxActions from '../../redux/actions';
import { attemptUserLogout } from '../../redux/authentication/thunks';
const { cartPreviewActions: { setCartPreview, resetCartPreview } } = reduxActions; 

export default () => {

  const location = useLocation();
  const dispatch = useDispatch();

  const {
    activeUser,
    cart: { cartItems },
    cartPreview
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(resetCartPreview());
  }, [location]);

  const sumCartItems = () => {
    return cartItems.reduce((accum, curr) => {
      return accum + curr.quantity;
    }, 0);
  };

  return (
    <NavigationContainer>
      <Link to={ '/' }>
        <Logo src={ NavLogo }/>
      </Link>
      <LinksContainer>
        <Link to={ '/shop' }>Shop</Link>
        { activeUser.isLoggedIn && <Link to={ '/order-history' }>Orders</Link> }
        { !activeUser.isLoggedIn
        ? <Link to={ '/login' }>Login</Link>
        : (
          <NavigationButton
            onClick={ () => attemptUserLogout(activeUser.id) }
            variant='secondary'
          >Logout</NavigationButton>
        ) }
        { !activeUser.isLoggedIn && <Link to={ '/signup' }>Signup</Link> }
        { !!activeUser.isLoggedIn && <Link to={ '/wishlist'}>Wishlist</Link>}
        <DispatchButton
          onClick={ () => setCartPreview(!cartPreview) }
          variant='secondary'
        >
          <IconTextContainer>
            <Icon src={ Cart }/>
            <SmallBody>{ sumCartItems() }</SmallBody>
          </IconTextContainer>
        </DispatchButton>
        { cartPreview && (
          !!cartItems.length
          ? <Preview 
              cartItems={ cartItems }
              user={ activeUser }
            />
          : <EmptyPreview />
        ) }
      </LinksContainer>
    </NavigationContainer>
  );
};