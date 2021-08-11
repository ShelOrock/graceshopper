import * as React from 'react';

import PageContainer from '../Containers/Page/Page';
import Header from '../Containers/Page/Header';
import Section from '../Containers/Page/Section';
import SectionHeader from '../Containers/Page/SectionHeader';
import Title from '../Atoms/Title';
import Heading from '../Atoms/Heading';

export default ({
  title,
  productsHeading,
  pagination,
  products
}) => (
  <PageContainer>
    <Header>
      <Title>{ title }</Title>
    </Header>
    <Section>
      <SectionHeader>
        <Heading>{ productsHeading }</Heading>
        { pagination }
      </SectionHeader>
      { products }
    </Section>
  </PageContainer>
);
