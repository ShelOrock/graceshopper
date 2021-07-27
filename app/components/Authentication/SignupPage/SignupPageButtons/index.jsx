import * as React from 'react';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const { StyledAuthenticationPages: { AuthenticationButtonsContainer } } = StyledComponents;

export default ({ children }) => <AuthenticationButtonsContainer>{ children }</AuthenticationButtonsContainer>;
