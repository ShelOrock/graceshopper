import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledNavigation: { StyledLink } } = StyledComponents;

export default ({ to, children }) => <StyledLink to={ to }>{ children }</StyledLink>;
