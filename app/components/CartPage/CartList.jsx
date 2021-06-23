import * as React from 'react';

import CartListItem from './CartListItem.jsx.js';
import * as StyledComponents from '../StyledComponents.jsx';
const { StyledList: { LineList } } = StyledComponents;

export default () => (
  <LineList>
    { !!cart.length && cart.map(cartItem => <CartListItem key={ cartItem.id } { ...cardItem } />)}
  </LineList>
)