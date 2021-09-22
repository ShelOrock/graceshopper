import React from 'react';

import * as StyledComponents from '../../StyledComponents';
const { StyledDiv: { Row } } = StyledComponents;

const Main = ({ children }) => <Row alignItems='center'>{ children }</Row>;

export default Main;
