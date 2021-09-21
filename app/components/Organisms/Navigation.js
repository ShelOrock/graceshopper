import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import NavLogo from '/public/img/logo.png'
import Cart from '/public/img/cart.png'
import { NavigationContainers, MediaContainers } from '../Containers';
import Preview from './Preview';
import EmptyPreview from '../Molecules/EmptyPreview';
import {
  TypeAtoms,
  MediaAtoms,
  ButtonAtoms,
  NavigationAtoms,
} from '../Atoms';

import { authenticationThunks, cartThunks } from '../../redux/thunks';
import { cartPreviewActions } from '../../redux/actions';
import List from './List';
import PreviewCard from '../Molecules/PreviewCard';

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
      <NavigationAtoms.TextLink to={ '/' }>
        <MediaAtoms.Logo src={ NavLogo }/>
      </NavigationAtoms.TextLink>
      <NavigationContainers.Links>
        <NavigationAtoms.TextLink to={ '/shop' }>Shop</NavigationAtoms.TextLink>
        { activeUser.isLoggedIn && <NavigationAtoms.TextLink to={ '/order-history' }>Orders</NavigationAtoms.TextLink> }
        { !activeUser.isLoggedIn && <NavigationAtoms.TextLink to={ '/login' }>Login</NavigationAtoms.TextLink> }
        { activeUser.isLoggedIn && <NavigationAtoms.ButtonLink
            onClick={ authenticationThunks.attemptUserLogout(activeUser.id) }
            dispatch={ dispatch }
            variant='secondary'
          >Logout</NavigationAtoms.ButtonLink>
        }
        { !activeUser.isLoggedIn && <NavigationAtoms.TextLink to={ '/signup' }>Signup</NavigationAtoms.TextLink> }
        { activeUser.isLoggedIn && <NavigationAtoms.TextLink to={ '/wishlist'}>Wishlist</NavigationAtoms.TextLink>}
        <ButtonAtoms.Button
          onClick={ () => cartPreviewActions.setCartPreview(!cartPreview) }
          dispatch={ dispatch }
          variant='secondary'
        >
          <MediaContainers.Main>
            <MediaAtoms.Icon src={ Cart }/>
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
                      dispatch={ dispatch }
                      removeProductFromCart={ () => cartThunks.removeProductFromCart(
                        activeUser.id,
                        { cartItemId: cartItem.id }
                      ) }
                    />
                  )}
                />
              }
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
