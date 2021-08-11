import * as React from 'react';

import PageContainer from '../Containers/Page/Page';
import Section from '../Containers/Page/Section';
import SectionHeader from '../Containers/Page/SectionHeader';
import Heading from '../Atoms/Heading';
import Title from '../Atoms/Title';

export default ({
  title,
  breadcrumbs,
  product,
  similarHeading,
  similar
}) => (
  <PageContainer>
    <Title>{ title }</Title>
    { breadcrumbs }
    <Section>{ product }</Section>
    <Section>
      <SectionHeader>
        <Heading>{ similarHeading }</Heading>
      </SectionHeader>
      { similar }
    </Section>
  </PageContainer>
);
