import * as React from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '../../ProductCard/index.jsx';
import * as StyledComponents from '../../StyledComponents';
const { StyledList: { CardList } } = StyledComponents

export default () => {

  const { featuredProducts } = useSelector(state => state);

  return (
    <CardList>
      { !!featuredProducts.length && featuredProducts.map(product => <ProductCard key={ product.id } product={ product } />) }
    </CardList>
  )
}