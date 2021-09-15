import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import NavLogo from '/public/img/logo.png'
import Cart from '/public/img/cart.png'
import { NavigationContainers } from '../Containers';
import IconTextContainer from '../Containers/IconText';
import Preview from './Preview';
import EmptyPreview from '../Molecules/EmptyPreview';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
  NavigationAtoms,
} from '../Atoms';

import { authenticationThunks } from '../../redux/thunks';
import { cartPreviewActions } from '../../redux/actions';

const Navigation = ({
  dispatch
}) => {

  const location = useLocation();

  const {
    activeUser,
    cart: { cartItems },
    cartPreview
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(cartPreviewActions.resetCartPreview());
  }, [location]);

  const sumCartItems = () => {
    return cartItems.reduce((accum, curr) => {
      return accum + curr.quantity;
    }, 0);
  };

  return (
    <NavigationContainers.Main>
      <NavigationAtoms.NavLink to={ '/' }>
        <MediaAtoms.Logo src={ NavLogo }/>
      </NavigationAtoms.NavLink>
      <NavigationContainers.Links>
        <NavigationAtoms.NavLink to={ '/shop' }>Shop</NavigationAtoms.NavLink>
        { activeUser.isLoggedIn && <NavigationAtoms.NavLink to={ '/order-history' }>Orders</NavigationAtoms.NavLink> }
        { !activeUser.isLoggedIn && <NavigationAtoms.NavLink to={ '/login' }>Login</NavigationAtoms.NavLink> }
        { activeUser.isLoggedIn && <NavigationAtoms.ButtonLink
            onClick={ () => authenticationThunks.attemptUserLogout(activeUser.id) }
            variant='secondary'
          >Logout</NavigationAtoms.ButtonLink>
        }
        { !activeUser.isLoggedIn && <NavigationAtoms.NavLink to={ '/signup' }>Signup</NavigationAtoms.NavLink> }
        { !!activeUser.isLoggedIn && <NavigationAtoms.NavLink to={ '/wishlist'}>Wishlist</NavigationAtoms.NavLink>}
        <ButtonAtoms.DispatchButton
          onClick={ () => cartPreviewActions.setCartPreview(!cartPreview) }
          variant='secondary'
        >
          <IconTextContainer>
            <MediaAtom.Icon src={ Cart }/>
            <TypeAtoms.SmallBody>{ sumCartItems() }</TypeAtoms.SmallBody>
          </IconTextContainer>
        </ButtonAtoms.DispatchButton>
        { cartPreview && (
          !!cartItems.length
          ? <Preview 
              cartItems={ cartItems }
              user={ activeUser }
            />
          : <EmptyPreview />
        ) }
      </NavigationContainers.Links>
    </NavigationContainers.Main>
  );
};

export default Navigation;
