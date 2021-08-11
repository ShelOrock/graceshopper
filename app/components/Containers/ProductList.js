import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledList: { StyledProductList } } = StyledComponents

export default ({ children }) => <StyledProductList>{ children }</StyledProductList>;
