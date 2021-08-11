import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledOrderHistoryPage: { StyledEmptyOrderHistory } } = StyledComponents;

export default ({ children }) => <StyledEmptyOrderHistory>{ children }</StyledEmptyOrderHistory>;
