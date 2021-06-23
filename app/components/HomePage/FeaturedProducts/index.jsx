import * as React from 'react';

import FeaturedProductList from './FeaturedProductList.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledType: { Title } } = StyledComponents;

export default () => (
  <>
    <Title>Featured Products</Title>
    <FeaturedProductList />
  </>
)