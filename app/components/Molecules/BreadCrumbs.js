import React from 'react';

import { BreadCrumbsContainers } from '../Containers';
import { TypeAtoms, NavigationAtoms } from '../Atoms';

const BreadCrumbs = ({ crumbs }) => (
  <BreadCrumbsContainers.Main>
    { crumbs.length && crumbs.map((crumb, idx) => (
      <BreadCrumbsContainers.Crumb key={ idx }>
        <NavigationAtoms.TextLink to={ crumb.to }>{ crumb.name }</NavigationAtoms.TextLink>
        <TypeAtoms.Body>{ idx !== crumbs.length - 1 && '>' }</TypeAtoms.Body>
      </BreadCrumbsContainers.Crumb>
    )) }
  </BreadCrumbsContainers.Main>
);

export default BreadCrumbs;
