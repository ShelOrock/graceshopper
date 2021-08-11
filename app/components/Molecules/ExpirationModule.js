import * as React from 'react';

import InputModule from '../Containers/Form/InputModule';
import InformationContainer from '../Containers/Form/Information';
import Label from '../Atoms/Label';
import Expiration from '../Atoms/Expiration';

export default () => (
  <InputModule>
    <InformationContainer>
      <Label>Expiration</Label>
    </InformationContainer>
    <Expiration />
  </InputModule>
);
