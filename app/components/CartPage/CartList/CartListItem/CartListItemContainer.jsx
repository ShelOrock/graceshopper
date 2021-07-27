import * as React from 'react';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledCartPage: { CartListItemContainer } } = StyledComponents;

export default ({ children }) => <CartListItemContainer>{ children }</CartListItemContainer>;
