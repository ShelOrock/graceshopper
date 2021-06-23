import * as React from 'react';

import CartNavLink from './CartNavLink.jsx';
import WishlistNavLink from './WishlistNavLink.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledDiv: { Row } } = StyledComponents;

export default (activeUser) => (
  <Row>
    <CartNavLink />
    { activeUser.userType !== 'Guest' && <WishlistNavLink /> }
  </Row>
)