import * as React from 'react';

import InputModule from '../Containers/Form/InputModule';
import InformationContainer from '../Containers/Form/Information';
import Label from '../Atoms/Label';
import SecurityCode from '../Atoms/SecurityCode';

export default () => (
  <InputModule>
    <InformationContainer>
      <Label>Security Code</Label>
    </InformationContainer>
    <SecurityCode />
  </InputModule>
);
