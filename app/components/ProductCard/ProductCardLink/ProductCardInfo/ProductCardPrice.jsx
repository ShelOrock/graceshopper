import * as React from 'react';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledType: { SubHeading } } = StyledComponents;

export default ({ product }) => <SubHeading>{ product.unitPrice }</SubHeading>;
