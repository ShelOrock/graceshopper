import React from 'react';

import { PageContainers } from '../Containers';
import { TypeAtoms } from '../Atoms';

const ProductTemplate = ({
  title,
  breadcrumbs,
  product,
  similarHeading,
  similar
}) => (
  <PageContainers.Main>
    <TypeAtoms.Title>{ title }</TypeAtoms.Title>
    { breadcrumbs }
    <PageContainers.Section>{ product }</PageContainers.Section>
    <PageContainers.Section>
      <PageContainers.Title>
        <TypeAtoms.Heading>{ similarHeading }</TypeAtoms.Heading>
      </PageContainers.Title>
      { similar }
    </PageContainers.Section>
  </PageContainers.Main>
);

export default ProductTemplate;
