import * as React from 'react';

import SimilarProductsList from './SimilarProductsList.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledType: { Title } } = StyledComponents;

export default ({ similarProducts }) => (
  <>
    <Title>You may also like</Title>
    <SimilarProductsList similarProducts={ similarProducts } />
  </>
);
