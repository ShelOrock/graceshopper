import * as React from 'react';
import { useSelector } from 'react-redux';

import HomeNavLink from './HomeNavLink.jsx';
import ShopNavLink from './ShopNavLink.jsx';
import AuthenticationLinks from './AuthenticationLinks/index.jsx';
import CartAndWishlistLinks from './CartAndWishlistLinks/index.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledDiv: { Row } } = StyledComponents;

export default () => {
  
  const { activeUser } = useSelector(state => state);

  return (
    <Row justifyContent='space-between'>
      <HomeNavLink />
      <ShopNavLink />
      <AuthenticationLinks />
      <CartAndWishlistLinks { ...activeUser } />
    </Row>
  )
}