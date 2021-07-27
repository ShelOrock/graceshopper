import * as React from 'react';

import EmptyShoppingCartMessage from './EmptyShoppingCartMessage.jsx';
import ButtonToShop from './ButtonToShop.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledCartPage: { EmptyShoppingCartMessageContainer } } = StyledComponents;

export default () => (
  <EmptyShoppingCartMessageContainer>
    <EmptyShoppingCartMessage />
    <ButtonToShop />
  </EmptyShoppingCartMessageContainer>
);
