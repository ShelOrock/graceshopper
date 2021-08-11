import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledNavigation: { StyledBreadCrumb } } = StyledComponents;

export default ({ to, children }) => <StyledBreadCrumb to={ to }>{ children }</StyledBreadCrumb>;
