import React from 'react';

import { InputAtoms } from '../Atoms';
import { InputModuleContainers } from '../Containers';

const InputModule = ({
  type,
  name,
  value,
  onChange,
  error = '',
}) => (
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

export default InputModule;
