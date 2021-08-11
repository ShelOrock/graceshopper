import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledOrderCard: { StyledQuantity } } = StyledComponents;

export default ({ children }) => <StyledQuantity>{ children }</StyledQuantity>;
