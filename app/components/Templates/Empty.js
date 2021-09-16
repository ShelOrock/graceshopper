import React from 'react';

import { PageContainers } from '../Containers';
import { TypeAtoms } from '../Atoms';

const EmptyTemplate = ({
  title,
  component
}) => (
  <PageContainers.Main>
    <PageContainers.Header>
      <TypeAtoms.Title>{ title }</TypeAtoms.Title>
    </PageContainers.Header>
    <PageContainers.Section>{ component }</PageContainers.Section>
  </PageContainers.Main>
);

export default EmptyTemplate;
