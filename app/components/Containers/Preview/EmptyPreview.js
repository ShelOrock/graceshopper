import * as React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledCartPreview: { StyledEmptyPreview } } = StyledComponents

export default ({ children }) => <StyledEmptyPreview>{ children }</StyledEmptyPreview>;
