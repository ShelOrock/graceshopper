import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledNavigation: { StyledHeroLink } } = StyledComponents;

export default ({ to, children }) => <StyledHeroLink to={ to }>{ children }</StyledHeroLink>;
