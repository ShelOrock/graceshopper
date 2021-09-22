import React from 'react';

import {
  TypeAtoms,
  ButtonAtoms,
  NavigationAtoms
} from '../Atoms';
import { PageContainers } from '../Containers';

const EmptyMessage = ({
  heading,
  message,
  to,
  name
}) => (
  <PageContainers.Empty>
    <TypeAtoms.Heading>{ heading }</TypeAtoms.Heading>
    <TypeAtoms.Body>{ message }</TypeAtoms.Body>
    <NavigationAtoms.TextLink to={ to }>
      <ButtonAtoms.Button variant='secondary'>{ name }</ButtonAtoms.Button>
    </NavigationAtoms.TextLink>
  </PageContainers.Empty>
);

export default EmptyMessage;
