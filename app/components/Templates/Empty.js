import React from 'react';

import PageContainer from '../Containers/Page/Page'
import Header from '../Containers/Page/Header';
import Section from '../Containers/Page/Section';
import Title from '../Atoms/Title';

export default ({
  title,
  component
}) => (
  <PageContainer>
    <Header>
      <Title>{ title }</Title>
    </Header>
    <Section>{ component }</Section>
  </PageContainer>
);
