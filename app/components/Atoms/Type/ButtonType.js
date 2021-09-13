import React from 'react';

import { StyledType } from '../../StyledComponents';

const ButtonType = ({ variant, children }) => <StyledType.ButtonType variant={ variant }>{ children }</StyledType.ButtonType>;

export default ButtonType;
