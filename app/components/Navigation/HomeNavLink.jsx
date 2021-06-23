import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledNavigation: { NavigationLogo, NavLink } } = StyledComponents;

export default () => (
  <NavLink to='/'>
    <NavigationLogo src='' />
  </NavLink>
);