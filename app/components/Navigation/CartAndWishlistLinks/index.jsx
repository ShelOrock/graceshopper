import * as React from 'react';
import { useSelector } from 'react-redux';

import CartNavLink from './CartNavLink.jsx';
import WishlistNavLink from './WishlistNavLink.jsx';
import CartPreview from '../../CartPreview/index.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledDiv: { Row } } = StyledComponents;

export default ({ activeUser }) => {

  const { cartPreview } = useSelector(state => state);

  return (
    <Row>
      <CartNavLink />
      { activeUser.userType !== 'Guest' && <WishlistNavLink /> }
      { cartPreview && <CartPreview /> }
    </Row>
  )
};