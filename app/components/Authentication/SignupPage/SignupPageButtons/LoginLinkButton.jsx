import * as React from 'react';

import * as StyledComponents from '../../../StyledComponents/index.jsx';
const {
  StyledAuthenticationPages: { AuthenticationNavLinkBody },
  StyledNavigation: { TextLink },
} = StyledComponents;

export default () => <AuthenticationNavLinkBody>Already have an account? <TextLink to='/login'>Login.</TextLink></AuthenticationNavLinkBody>;
