import * as React from 'react';

import ProductCard from '../../ProductCard/index.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledList: { CardList } } = StyledComponents;

export default ({ similarProducts }) => (
  <CardList>
    { !!similarProducts.length && similarProducts.map(product => <ProductCard key={ product.id } product={ product } />) }
  </CardList>
);
