import * as React from 'react';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledType: { Body } } = StyledComponents;

export default (cartItem) => <Body>Subtotal: { cartItem.quantity * cartItem.productId.price }</Body>