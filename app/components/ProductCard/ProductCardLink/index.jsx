import * as React from 'react';

import ProductCardImage from './ProductCardImage.jsx';
import ProductCardInfo from './ProductCardInfo/index.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledProductCard: { ProductCardLink } } = StyledComponents;

export default ({ product }) => (
  <ProductCardLink to={ `/products/${ product.id }`}>
    <ProductCardImage product={ product } />
    <ProductCardInfo product={ product } />
  </ProductCardLink>
);