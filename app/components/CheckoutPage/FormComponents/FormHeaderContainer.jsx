import * as React from 'react';

import FormTitle from './FormTitle.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledForm: { FormHeaderContainer } } = StyledComponents;

export default ({ children, title }) => (
  <FormHeaderContainer>
  <FormTitle>{ title }</FormTitle>
    { children }
  </FormHeaderContainer>
);
