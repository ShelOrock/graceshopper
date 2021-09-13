import React from 'react';

import { StyledNavigation } from '../../StyledComponents';

const NavLink = ({ to, children }) => <StyledNavigation.NavLink to={ to }>{ children }</StyledNavigation.NavLink>;

export default NavLink;
