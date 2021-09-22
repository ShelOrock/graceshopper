import React from 'react';

import { InputAtoms } from '../Atoms';
import { InputModuleContainers } from '../Containers';

const StripeInput = ({ label, input }) => (
  <InputModuleContainers.Module>
    <InputModuleContainers.Information>
      <InputAtoms.Label>{ label }</InputAtoms.Label>
    </InputModuleContainers.Information>
    { input }
  </InputModuleContainers.Module>
);

export default StripeInput;
