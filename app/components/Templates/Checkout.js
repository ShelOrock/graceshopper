import React from 'react';

import { PageContainers } from '../Containers';
import { TypeAtoms } from '../Atoms';

const CheckoutTemplate = ({
  title,
  breadcrumbs,
  userInformation,
  shipping,
  payment
}) => (
  <PageContainers.Main>
    <PageContainers.Header>
      <TypeAtoms.Title>{ title }</TypeAtoms.Title>
      { breadcrumbs }
    </PageContainers.Header>
    <PageContainers.Section>{ userInformation }</PageContainers.Section>
    <PageContainers.Section>{ shipping }</PageContainers.Section>
    <PageContainers.Section>{ payment }</PageContainers.Section>
  </PageContainers.Main>
);

export default CheckoutTemplate;
