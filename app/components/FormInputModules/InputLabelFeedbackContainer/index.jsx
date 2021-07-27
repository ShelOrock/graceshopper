import * as React from 'react';

import InputLabel from './InputLabel.jsx';
import InputFeedback from './InputFeedback.jsx';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledForm: { InputLabelFeedbackContainer } } = StyledComponents;

export default (props) => (
  <InputLabelFeedbackContainer>
    <InputLabel { ...props } />
    <InputFeedback { ...props } />
  </InputLabelFeedbackContainer>
);
