import React from 'react';

import { PageContainers } from '../Containers';
import { TypeAtoms } from '../Atoms';

const ShopTemplate = ({
  title,
  productsHeading,
  pagination,
  products
}) => (
  <PageContainers.Main>
    <PageContainers.Header>
      <TypeAtoms.Title>{ title }</TypeAtoms.Title>
    </PageContainers.Header>
    <PageContainers.Section>
      <PageContainers.Title>
        <TypeAtoms.Heading>{ productsHeading }</TypeAtoms.Heading>
        { pagination }
      </PageContainers.Title>
      { products }
    </PageContainers.Section>
  </PageContainers.Main>
);

export default ShopTemplate;
