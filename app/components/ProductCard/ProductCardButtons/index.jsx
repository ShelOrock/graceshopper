import * as React from 'react';

import QuickAddToCartButton from './QuickAddToCartButton.jsx';
import QuickAddToWishlistButton from './QuickAddToWishlistButton.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledProductCard: { ProductCardButtonsContainer } } = StyledComponents;

export default ({ product }) => (
  <ProductCardButtonsContainer>
    <QuickAddToCartButton product={ product }/>
    <QuickAddToWishlistButton product={ product }/>
  </ProductCardButtonsContainer>
)