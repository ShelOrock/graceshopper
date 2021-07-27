import * as React from 'react';

import * as StyledComponents from '../../../../StyledComponents/index.jsx';
const { StyledType: { Heading } } = StyledComponents;

export default ({ product }) => <Heading>{ product.productName }</Heading>;