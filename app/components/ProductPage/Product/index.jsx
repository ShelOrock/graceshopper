import React from 'react';

import ProductPageInfoAndButtons from './ProductPageInfoAndButtons';
import ProductPageImage from './ProductPageImage';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledProductPage: { ProductPageContainer } } = StyledComponents;

export default (product) => (
  <ProductPageContainer>
    <ProductPageImage { ...product } />
    <ProductPageInfoAndButtons { ...product } />
  </ProductPageContainer>
);
