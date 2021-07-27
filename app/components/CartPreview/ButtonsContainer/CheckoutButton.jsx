import * as React from 'react';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledNavigation: { NavLink } } = StyledComponents;

export default ({ cartItems }) =>  !!cartItems && !!cartItems.length && <NavLink to={ '/checkout' }>Checkout</NavLink>;
