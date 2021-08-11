import styled from 'styled-components';

export const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  margin-top: 2rem;
`;

export const StyledBody = styled.p`
  font-size: 0.9rem;
  color ${ ({ variant }) => variant == 'secondary' ? 'white' : 'black' };
  line-height: 0;
  margin: 2rem;
`;

export const StyledLink = styled.div`
  font-size: 0.9rem;
  color ${ ({ variant }) => variant == 'secondary' ? 'white' : 'black' };
  margin: 2rem 0.5rem 0;
`;