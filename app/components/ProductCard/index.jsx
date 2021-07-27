import * as React from 'react';

import ProductCardButtons from './ProductCardButtons/index.jsx';
import ProductCardLink from './ProductCardLink/index.jsx';
import * as StyledComponents from '../StyledComponents/index.jsx';
const { StyledProductCard: { ProductCard } } = StyledComponents;

export default ({ product }) => (
  <ProductCard>
    <ProductCardButtons product={ product } />
    <ProductCardLink product={ product } />
  </ProductCard>
);
