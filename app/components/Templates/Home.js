import React from 'react';

import { PageContainers } from '../Containers';
import { TypeAtoms } from '../Atoms';

const HomeTemplate = ({
  featuredHeading,
  featured,
  popularHeading,
  popular
}) => (
  <PageContainers.Main>
    <PageContainers.Section>
      <PageContainers.Title>
        <TypeAtoms.Heading>{ featuredHeading }</TypeAtoms.Heading>
      </PageContainers.Title>
      { featured }
    </PageContainers.Section>
    <PageContainers.Section>
      <PageContainers.Title>
        <TypeAtoms.Heading>{ popularHeading }</TypeAtoms.Heading>
      </PageContainers.Title>
      { popular }
    </PageContainers.Section>
  </PageContainers.Main>
);

export default HomeTemplate;
