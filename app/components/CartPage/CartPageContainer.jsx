import * as React from 'react';

import SectionHeader from '../SectionHeader/index.jsx';
import { CartPageContainer } from '../StyledComponents/CartPage.jsx';

export default ({ children }) => (
  <CartPageContainer>
    <SectionHeader>Cart</SectionHeader>
    { children }
  </CartPageContainer>
);
