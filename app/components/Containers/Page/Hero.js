import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledPage: { StyledHero } } = StyledComponents;

export default ({ children }) => <StyledHero>{ children }</StyledHero>;
