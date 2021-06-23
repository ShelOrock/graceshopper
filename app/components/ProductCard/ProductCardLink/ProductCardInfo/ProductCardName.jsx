import * as React from 'react';

import * as StyledComponents from '../../../StyledComponents';
const { StyledType: { Heading } } = StyledComponents;

export default (product) => <Heading>{ product.name }</Heading>;
