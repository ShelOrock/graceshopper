import React from 'react';

import { PageContainers } from '../Containers';
import { TypeAtoms, NavigationAtoms } from '../Atoms';
import Link from '../Atoms/Link';
import DummyButton from '../Atoms/DummyButton';

const EmptyMessage = ({
  heading,
  message,
  to,
  name
}) => (
  <PageContainers.Empty>
    <TypeAtoms.Heading>{ heading }</TypeAtoms.Heading>
    <TypeAtoms.Body>{ message }</TypeAtoms.Body>
    <Link to={ to }>
      <DummyButton variant='secondary'>{ name }</DummyButton>
    </Link>
  </PageContainers.Empty>
);

export default EmptyMessage;
