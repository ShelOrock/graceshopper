import * as React from 'react';

import SignupNavLink from './SignupNavLink.jsx';
import LoginNavLink from './LoginNavLink.jsx';
import LogoutNavButton from './LogoutNavButton.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledDiv: { Row } } = StyledComponents;

export default ({ activeUser }) => (
  <Row justifyContent='flex-end'>
    { activeUser.userType == 'Guest' && <SignupNavLink /> }
    { activeUser.userType == 'Guest' ? <LoginNavLink /> : <LogoutNavButton activeUser={ activeUser }/> }
  </Row>
);
