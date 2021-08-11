import * as React from 'react';

import * as StyledComponents from '../StyledComponents';
const { StyledDiv: { Row } } = StyledComponents;

export default ({ children }) => <Row alignItems='center'>{ children }</Row>;
