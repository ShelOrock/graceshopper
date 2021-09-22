import * as React from 'react';

import { StyledBreadCrumbs } from '../../StyledComponents';

const Crumb = ({ to, children }) => <StyledBreadCrumbs.Crumb to={ to }>{ children }</StyledBreadCrumbs.Crumb>;

export default Crumb;
