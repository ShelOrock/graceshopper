import * as React from 'react';

import * as StyledComponents from '../../../../StyledComponents/index.jsx';
const { StyledType: { Body } } = StyledComponents;

export default ({ product }) => <Body>{ product.productDescription }</Body>