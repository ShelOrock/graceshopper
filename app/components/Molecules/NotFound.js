import React from 'react';

import NotFoundContainer from '../Containers/NotFound/NotFound';
import Body from '../Atoms/Body';
import Link from '../Atoms/Link';
import DummyButton from '../Atoms/DummyButton';
import Heading from '../Atoms/Heading';

export default () => (
  <NotFoundContainer>
    <Heading>Oops!</Heading>
    <Body>This page doesn't exist</Body>
    <Link to={ '/' }>
      <DummyButton variant='secondary'>Take me home</DummyButton>
    </Link>
  </NotFoundContainer>
);
