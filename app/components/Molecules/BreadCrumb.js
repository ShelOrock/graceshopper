import React from 'react';

import { NavigationContainers } from '../Containers';
import { TypeAtoms, NavigationAtoms } from '../Atoms';

const BreadCrumbs = ({ crumbs }) => (
  <NavigationContainers.Main>
    { crumbs.length && crumbs.map((crumb, idx) => (
      <NavigationContainers.Crumb>
        <NavigationAtoms.Crumb to={ crumb.to }>{ crumb.name }</NavigationAtoms.Crumb>
        <TypeAtoms.Body>{ idx === crumbs.length - 1 && '>' }</TypeAtoms.Body>
      </NavigationContainers.Crumb>
    )) }
  </NavigationContainers.Main>
);

export default BreadCrumbs;
