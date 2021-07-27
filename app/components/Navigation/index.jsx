import * as React from 'react';
import { useSelector } from 'react-redux';

import HomeNavLink from './HomeNavLink.jsx';
import ShopNavLink from './ShopNavLink.jsx';
import AuthenticationLinks from './AuthenticationLinks/index.jsx';
import CartAndWishlistLinks from './CartAndWishlistLinks/index.jsx';
import * as StyledComponents from '../StyledComponents/index.jsx';
const { StyledNavigation: { NavigationContainer } } = StyledComponents;

export default () => {
  
  const { activeUser } = useSelector(state => state);

  return (
    <NavigationContainer>
      <HomeNavLink />
      <ShopNavLink />
      <AuthenticationLinks activeUser={ activeUser } />
      <CartAndWishlistLinks activeUser={ activeUser } />
    </NavigationContainer>
  )
}