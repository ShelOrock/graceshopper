import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledButton: { StyledDummyButton } } = StyledComponents

export default ({ variant, children }) => <StyledDummyButton variant={ variant }>{ children }</StyledDummyButton>;
