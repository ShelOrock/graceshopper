import * as React from 'react';

import ProductCardName from './ProductCardName';
import ProductCardPrice from './ProductCardPrice';
import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledDiv: { Column } } = StyledComponents;

export default (product) => (
  <Column>
    <ProductCardName { ...product } />
    <ProductCardPrice { ...product } />
  </Column>
);
