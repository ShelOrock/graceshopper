import React from 'react';

import { PageContainers } from '../Containers';
import { TypeAtoms } from '../Atoms';

const OrderHistoryTemplate = ({
  title,
  orderHistory
}) => (
  <PageContainers.Main>
    <PageContainers.Header>
      <TypeAtoms.Title>{ title }</TypeAtoms.Title>
    </PageContainers.Header>
    <PageContainers.Section>{ orderHistory }</PageContainers.Section>
  </PageContainers.Main>
);

export default OrderHistoryTemplate;
