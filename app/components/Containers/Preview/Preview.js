import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledCartPreview: { StyledPreview } } = StyledComponents;

export default ({ children }) => <StyledPreview>{ children }</StyledPreview>;
