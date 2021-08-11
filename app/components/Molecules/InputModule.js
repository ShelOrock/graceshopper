import * as React from 'react';
const { useEffect } = React;

import InputModuleContainer from '../Containers/Form/InputModule'
import InformationContainer from '../Containers/Form/Information'
import Label from '../Atoms/Label';
import Feedback from '../Atoms/Feedback';
import InputField from '../Atoms/InputField';

export default ({
  type,
  name,
  value,
  onChange,
  validateField = null,
  error = '',
}) => {

  useEffect(() => {
    validateField && validateField(name, value)
  }, [value]);

  return (
    <InputModuleContainer>
      <InformationContainer>
        <Label>{ name }</Label>
        <Feedback>{ error }</Feedback>
      </InformationContainer>
      <InputField
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    </InputModuleContainer>
  );
}
