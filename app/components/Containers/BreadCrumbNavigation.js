import React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledNavigation: { StyledBreadCrumbNavigation } } = StyledComponents;

export default ({ children }) => <StyledBreadCrumbNavigation>{ children }</StyledBreadCrumbNavigation>;
