import * as React from 'react';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledForm: { InputLabel } } = StyledComponents;

export default ({ name }) => <InputLabel>{ name }</InputLabel>;
