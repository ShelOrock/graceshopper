import * as React from 'react';

import ProductName from './ProductName.jsx';
import ProductPrice from './ProductPrice.jsx';
import ProductDescription from './ProductDescription.jsx';
import * as StyledComponents from '../../../../StyledComponents/index.jsx';
const { StyledProductPage: { ProductInfoContainer } } = StyledComponents;

export default (product) => (
  <ProductInfoContainer>
    <ProductName { ...product } />
    <ProductPrice { ...product } />
    <ProductDescription { ...product } />
  </ProductInfoContainer>
);
