import * as React from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '../../ProductCard/index.jsx';
import * as StyledComponents from '../../StyledComponents';
const { StyledList: { CardList } } = StyledComponents

export default () => {

  const { popularProducts } = useSelector(state => state);

  return (
    <CardList>
      { !!popularProducts.length && popularProducts.map(product => <ProductCard key={ product.id } product={ product } />) }
    </CardList>
  );
};
