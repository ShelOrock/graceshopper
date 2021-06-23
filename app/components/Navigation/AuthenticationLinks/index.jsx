import * as React from 'react';

import SignupNavLink from './SignupNavLink.jsx';
import LoginNavLink from './LoginNavLink.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledDiv: { Row } } = StyledComponents;

export default () => (
  <Row justifyContent='flex-end'>
    <SignupNavLink />
    <LoginNavLink />
  </Row>
);
