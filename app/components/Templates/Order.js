import React from 'react';

import { PageContainers } from '../Containers';
import { TypeAtoms } from '../Atoms';

const OrderTemplate = ({
  title,
  breadcrumbs,
  order
}) => (
  <PageContainers.Main>
    <PageContainers.Header>
      <TypeAtoms.Title>{ title }</TypeAtoms.Title>
      { breadcrumbs }
    </PageContainers.Header>
    <PageContainers.Section>{ order }</PageContainers.Section>
  </PageContainers.Main>
);

export default OrderTemplate;
