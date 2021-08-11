import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledList: { StyledCardList } } = StyledComponents

export default ({ children }) => <StyledCardList>{ children }</StyledCardList>;
