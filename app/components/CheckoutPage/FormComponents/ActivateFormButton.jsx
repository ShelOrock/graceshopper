import * as React from 'react';

import EditIcon from '/public/img/edit.png';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const {
  StyledButton: { Button },
  StyledImage: { Icon }
} = StyledComponents;

export default ({ setActiveForm, form }) => {

  const handleOnClick = () => {
    setActiveForm(form);
  };

  return (
    <Button variant='secondary' onClick={ handleOnClick }>
      <Icon src={ EditIcon } alt='edit' />
    </Button>
  );
};
