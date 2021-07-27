import * as React from 'react';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledForm: { FormContainer } } = StyledComponents;

export default ({ children }) => <FormContainer>{ children }</FormContainer>;
