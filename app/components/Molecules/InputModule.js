import React, { useEffect } from 'react';

import { InputModuleContainers } from '../Containers';
import { InputAtoms } from '../Atoms';

const InputModule = ({
  type,
  name,
  value,
  onChange,
  validateField = null,
  error = '',
}) => {

  // useEffect(() => {
  //   validateField && validateField(name, value)
  // }, [value]);

  return (
    <InputModuleContainers.Module>
      <InputModuleContainers.Information>
        <InputAtoms.Label>{ name }</InputAtoms.Label>
        <InputAtoms.Feedback>{ error }</InputAtoms.Feedback>
      </InputModuleContainers.Information>
      <InputAtoms.Field
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
      />
    </InputModuleContainers.Module>
  );
};

export default InputModule;
