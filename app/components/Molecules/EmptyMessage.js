import * as React from 'react';

import EmptyContainer from '../Containers/Cart/EmptyCart';
import Body from '../Atoms/Body';
import Link from '../Atoms/Link';
import DummyButton from '../Atoms/DummyButton';
import Heading from '../Atoms/Heading';

export default ({
  heading,
  message,
  to,
  name
}) => (
  <EmptyContainer>
    <Heading>{ heading }</Heading>
    <Body>{ message }</Body>
    <Link to={ to }>
      <DummyButton variant='secondary'>{ name }</DummyButton>
    </Link>
  </EmptyContainer>
);
