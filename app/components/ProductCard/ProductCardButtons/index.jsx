import * as React from 'react';

import AddToCartButton from './AddToCartButton.jsx';
import AddToWishlistButton from './AddToWishlistButton.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledDiv: { Row } } = StyledComponents;

export default (product) => (
  <Row>
    <AddToCartButton { ...product }/>
    <AddToWishlistButton { ...product }/>
  </Row>
)