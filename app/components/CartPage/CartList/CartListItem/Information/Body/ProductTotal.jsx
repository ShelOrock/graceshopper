import * as React from 'react';

import * as StyledComponents from '../../../../../StyledComponents/index.jsx';
const { StyledType: { Body } } = StyledComponents;

export default ({ quantity, product }) => <Body>Subtotal: { (quantity * product.unitPrice).toFixed(2) }</Body>;
