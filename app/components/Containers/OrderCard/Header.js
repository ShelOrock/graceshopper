import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledOrderCard: { StyledHeader } } = StyledComponents;

export default ({ children }) => <StyledHeader>{ children }</StyledHeader>;
