import * as React from 'react';

import LeftIcon from '/public/img/left-white.png';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const {
  StyledButton: { PaginateButton },
  StyledImage: { Icon }
} = StyledComponents;

export default ({ page, setPage }) => {

  const handleOnClick = () => setPage(page - 1);

  const buttonProps = {
    onClick: handleOnClick,
    disabled: page <= 0
  };

  return (
    <PaginateButton { ...buttonProps }>
      <Icon src={ LeftIcon } alt='Left' />
    </PaginateButton>
  );
};
