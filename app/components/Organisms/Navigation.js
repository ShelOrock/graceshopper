import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import NavLogo from '/public/img/logo.png'
import CartIcon from '/public/img/cart.png'
import { Preview, List } from '.';
import { PreviewCard, EmptyPreview } from '../Molecules';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
  NavigationAtoms,
} from '../Atoms';
import { NavigationContainers, MediaContainers } from '../Containers';

import { authenticationThunks, cartThunks } from '../../redux/thunks';
import { cartPreviewActions } from '../../redux/actions';

const Navigation = () => {

  const dispatch = useDispatch();

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
      <NavigationAtoms.TextLink to={ '/' }>
        <MediaAtoms.Logo src={ NavLogo }/>
      </NavigationAtoms.TextLink>
      <NavigationContainers.Links>
        <NavigationAtoms.TextLink to={ '/shop' }>Shop</NavigationAtoms.TextLink>
        { activeUser.isLoggedIn && <NavigationAtoms.TextLink to={ '/order-history' }>Orders</NavigationAtoms.TextLink> }
        { !activeUser.isLoggedIn && <NavigationAtoms.TextLink to={ '/login' }>Login</NavigationAtoms.TextLink> }
        { activeUser.isLoggedIn && <NavigationAtoms.ButtonLink
            onClick={ () => dispatch(authenticationThunks.attemptUserLogout(activeUser.id)) }
            variant='secondary'
          >Logout</NavigationAtoms.ButtonLink>
        }
        { !activeUser.isLoggedIn && <NavigationAtoms.TextLink to={ '/signup' }>Signup</NavigationAtoms.TextLink> }
        { activeUser.isLoggedIn && <NavigationAtoms.TextLink to={ '/wishlist'}>Wishlist</NavigationAtoms.TextLink>}
        <ButtonAtoms.Button
          onClick={ () => dispatch(cartPreviewActions.setCartPreview(!cartPreview)) }
          variant='secondary'
        >
          <MediaContainers.Main>
            <MediaAtoms.Icon src={ CartIcon }/>
            <TypeAtoms.SmallBody>{ sumCartItems() }</TypeAtoms.SmallBody>
          </MediaContainers.Main>
        </ButtonAtoms.Button>
        { cartPreview && (
          !!cartItems.length
          ? <Preview 
              cardList={
                <List
                  listData={ cartItems }
                  renderData={ cartItem => (
                    <PreviewCard
                      key={ cartItem.id }
                      cartItem={ cartItem }
                      product={ cartItem.product }
                      removeProductFromCart={ () => dispatch(cartThunks.removeProductFromCart(
                        activeUser.id,
                        { cartItemId: cartItem.id }
                      )) }
                    />
                  ) }
                />
              }
            />
          : <EmptyPreview />
        ) }
      </NavigationContainers.Links>
    </NavigationContainers.Main>
  );
};

export default Navigation;
