import * as React from 'react';

import ProductCardName from './ProductCardName';
import ProductCardPrice from './ProductCardPrice';
import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledProductCard: { ProductCardInfoContainer } } = StyledComponents;

export default ({ product }) => (
  <ProductCardInfoContainer>
    <ProductCardName product={ product } />
    <ProductCardPrice product={ product } />
  </ProductCardInfoContainer>
);
