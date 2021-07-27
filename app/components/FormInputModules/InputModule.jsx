import * as React from 'react';
const { useEffect } = React;

import InputLabelFeedbackContainer from './InputLabelFeedbackContainer/index.jsx';
import * as StyledComponents from '../StyledComponents/index.jsx';
const { StyledForm: { InputModule, TextInputField } } = StyledComponents;

export default (props) => {

  useEffect(() => {
    props.validateField && props.validateField(props.name, props.value)
  }, [props.value]);

  return (
    <InputModule>
      <InputLabelFeedbackContainer { ...props } />
      <TextInputField { ...props } />
    </InputModule>
  );
}
