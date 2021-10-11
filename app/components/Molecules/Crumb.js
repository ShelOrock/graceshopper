import React from 'react';

import { NavigationAtoms, TypeAtoms } from '../Atoms';
import { BreadCrumbsContainers } from '../Containers';

const Crumb = ({
  to = '#',
  name = '',
  lastElement = true
}) => (
  <BreadCrumbsContainers.Crumb>
    <NavigationAtoms.TextLink to={ to }>{ name }</NavigationAtoms.TextLink>
    <TypeAtoms.Body>{ !lastElement && '>' }</TypeAtoms.Body>
  </BreadCrumbsContainers.Crumb>
);

export default Crumb