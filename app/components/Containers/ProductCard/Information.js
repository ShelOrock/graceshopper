import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledProductCard: { StyledInformation } } = StyledComponents;

export default ({ children }) => <StyledInformation>{ children }</StyledInformation>;
