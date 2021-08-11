import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledProductPage: { StyledHeader } } = StyledComponents;

export default ({ children }) => <StyledHeader>{ children }</StyledHeader>;
