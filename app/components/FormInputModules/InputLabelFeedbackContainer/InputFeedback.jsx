import * as React from 'react';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledForm: { InputFeedback } } = StyledComponents;

export default ({ error }) => !!error && <InputFeedback>{ error }</InputFeedback>;
