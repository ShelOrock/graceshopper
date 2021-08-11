import * as React from 'react';

import ProductListContainer from '../Containers/ProductList';
import SubTitle from '../Atoms/SubTitle';
import CardList from '../Atoms/CardList';
import ProductCard from '../Molecules/ProductCard';

export default ({
  heading = '',
  products = [],
  wishlist = {},
  user = {}
}) => (
  <ProductListContainer>
    <SubTitle>{ heading }</SubTitle>
    <CardList>
      { !!products.length && products.map(product => (
        <ProductCard
          key={ product.id }
          product={ product }
          wishlist={ wishlist }
          user={ user }
        />
      )) }
    </CardList>
  </ProductListContainer>
);