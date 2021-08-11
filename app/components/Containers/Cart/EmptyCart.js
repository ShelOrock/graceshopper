import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledCartPage: { StyledEmptyCart } } = StyledComponents;

export default ({ children }) => <StyledEmptyCart>{ children }</StyledEmptyCart>;
