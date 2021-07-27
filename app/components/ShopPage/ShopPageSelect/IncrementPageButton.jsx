import * as React from 'react';
import { useSelector } from 'react-redux';

import Right from '/public/img/right-white.png';
import * as StyledComponents from '../../StyledComponents/index.jsx';
const {
  StyledButton: { PaginateButton },
  StyledImage: { Icon }
} = StyledComponents;

export default ({ page, setPage }) => {

  const { allProducts } = useSelector(state => state);

  const handleOnClick = () => setPage(page + 1);

  const buttonProps = {
    onClick: handleOnClick,
    disabled: allProducts.count <= (page + 1) * 4
  };
  
  return (
    <PaginateButton { ...buttonProps }>
      <Icon src={ Right } alt='Right' />
    </PaginateButton>
  );
};
