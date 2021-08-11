import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledCartPage: { StyledCartItem } } = StyledComponents;

export default ({ children }) => <StyledCartItem>{ children }</StyledCartItem>;
