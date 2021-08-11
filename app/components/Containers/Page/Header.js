import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledPage: { StyledHeader } } = StyledComponents;

export default ({ children }) => <StyledHeader>{ children }</StyledHeader>;
