import * as React from 'react';

import PageContainer from '../Containers/Page/Page';
import Section from '../Containers/Page/Section';
import Heading from '../Atoms/Heading';
import SectionHeader from '../Containers/Page/SectionHeader';
import Header from '../Containers/Page/Header';

export default ({
  featuredHeading,
  featured,
  popularHeading,
  popular
}) => (
  <PageContainer>
    <Header></Header>
    <Section>
      <SectionHeader>
        <Heading>{ featuredHeading }</Heading>
      </SectionHeader>
      { featured }
    </Section>
    <Section>
      <SectionHeader>
        <Heading>{ popularHeading }</Heading>
      </SectionHeader>
      { popular }
    </Section>
  </PageContainer>
);
