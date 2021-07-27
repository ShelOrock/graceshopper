import * as React from 'react';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const {
  StyledAuthenticationPages: { AuthenticationNavLinkBody },
  StyledNavigation: { TextLink },
} = StyledComponents;

export default () => <AuthenticationNavLinkBody>Don't have an account? <TextLink to='/signup'>Sign up.</TextLink></AuthenticationNavLinkBody>;
