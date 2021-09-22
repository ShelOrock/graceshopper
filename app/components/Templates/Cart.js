import React from 'react';

import { PageContainers } from '../Containers';
import { TypeAtoms } from '../Atoms';

const CartTemplate = ({
  title,
  cart
}) => (
  <PageContainers.Main>
    <PageContainers.Header>
      <TypeAtoms.Title>{ title }</TypeAtoms.Title>
    </PageContainers.Header>
    <PageContainers.Section>{ cart }</PageContainers.Section>
  </PageContainers.Main>
);

export default CartTemplate;
