import React from 'react';

import { PageContainers } from '../Containers';
import { TypeAtoms } from '../Atoms';

const WishlistTemplate = ({
  title,
  wishlist
}) => (
  <PageContainers.Main>
    <PageContainers.Header>
      <TypeAtoms.Title>{ title }</TypeAtoms.Title>
    </PageContainers.Header>
    <PageContainers.Section>{ wishlist }</PageContainers.Section>
  </PageContainers.Main>
);

export default WishlistTemplate;
