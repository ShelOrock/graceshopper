import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background-color: ${ ({ disabled, variant }) => disabled ? '#DBDBDB': variant == 'secondary' ? 'white' : 'black' };
  color: ${ ({ disabled, variant }) => disabled ? '#ABABAB' : variant == 'secondary' ? 'black' : 'white ' };
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  box-shadow: ${ ({ disabled }) => disabled ? 'none' : '0px 5px 5px rgba(100, 100, 100, 0.1)' };
  cursor: ${ ({ disabled }) => disabled ? 'default' : 'pointer' };
  white-space: nowrap;
  margin: 0 0.5rem 0 0;

  &:hover {
    background-color: ${ ({ disabled, variant }) => disabled ? '#DBDBDB': variant == 'secondary' ? 'white' : '#222' };
  }

  &:active {
    box-shadow: ${ ({ disabled }) => disabled ? 'none' : '0px 5px 5px rgba(100, 100, 100, 0.1)' };
    background-color: ${ ({ disabled, variant }) => disabled ? '#DBDBDB': variant == 'secondary' ? 'white' : 'black' };
    transform: ${ ({ disabled }) => disabled ? 'none' : 'translateY(4px)' };
  }
`;

export const Button = styled.button`
  ${ ButtonStyles }
`;

export const StyledDummyButton = styled.div`
  ${ ButtonStyles }
`;

// export const QuickButton = styled.button`
//   ${ ButtonStyles }
//   padding: 0.5rem;
//   margin: 0 0.5rem 0 0;
// `;

// export const SmallButton = styled.button`
//   ${ ButtonStyles }
//   padding: 0 0.5rem;
// `;

// export const PaginateButton = styled.button`
//   ${ ButtonStyles }
//   padding: 0.5rem;
// `;

export const ButtonText = styled.p`
  font-size: 0.9rem;
  color ${ ({ variant }) => variant == 'secondary' ? 'white' : 'black' };
  line-height: 0;
  margin: 0 0.5rem;
`;