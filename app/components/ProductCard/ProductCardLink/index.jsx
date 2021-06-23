import * as React from 'react';

import ProductCardImage from './ProductCardImage';
import ProductCardText from './ProductCardText';
import * as StyledComponents from '../StyledComponents/index.jsx';
const { StyledProductCard: { ProductCardLink } } = StyledComponents;

export default (product) => (
  <ProductCardLink to={ `/products/${ product.id }`}>
    <ProductCardImage { ...product } />
    <ProductCardText { ...product } />
  </ProductCardLink>
);