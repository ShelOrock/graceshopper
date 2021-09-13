import * as React from 'react';

import { StyledNavigation } from '../../StyledComponents';

const Crumb = ({ to, children }) => <StyledNavigation.Crumb to={ to }>{ children }</StyledNavigation.Crumb>;

export default Crumb;
