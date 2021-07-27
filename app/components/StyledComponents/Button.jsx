import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background-color: ${ ({ disabled, variant }) => disabled ? '#DBDBDB': variant == 'secondary' ? 'white' : 'black' };
  color: ${ ({ disabled, variant }) => disabled ? '#ABABAB' : variant == 'secondary' ? 'black' : 'white ' };
  border: none;
  border-radius: 6px;
  box-shadow: 0px 5px 5px #DBDBDB;
  cursor: pointer;
`;

export const Button = styled.button`
  ${ ButtonStyles }
  padding: 0.5rem;

  &:hover {
    background-color: ${ ({ disabled, variant }) => disabled ? '#DBDBDB': variant == 'secondary' ? 'white' : '#222' };
  }

  &:active {
    box-shadow: none;
    background-color: ${ ({ disabled, variant }) => disabled ? '#DBDBDB': variant == 'secondary' ? 'white' : 'black' };
    transform: translateY(4px);
  }
`;

export const SmallButton = styled.button`
  ${ ButtonStyles }
  padding: 0 0.5rem;
`;

export const PaginateButton = styled.button`
  ${ ButtonStyles }
  padding: 0.5rem;
`;

export const ButtonText = styled.p`
  font-size: 0.9rem;
  color ${ ({ variant }) => variant == 'secondary' ? 'white' : 'black' };
  line-height: 0;
  margin: 0 0.5rem;
`;