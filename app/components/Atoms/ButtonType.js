import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledType: { StyledButtonType } } = StyledComponents

export default ({ variant, children }) => <StyledButtonType variant={ variant }>{ children }</StyledButtonType>;
