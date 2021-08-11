import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledCartPage: { CartPageContainer } } = StyledComponents;

export default ({ children }) => <CartPageContainer>{ children }</CartPageContainer>;
