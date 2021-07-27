import styled from 'styled-components';

export const AuthenticationButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  margin-top: 2rem;
`;

export const AuthenticationNavLinkBody = styled.p`
  font-size: 0.9rem;
  color ${ ({ variant }) => variant == 'secondary' ? 'white' : 'black' };
  line-height: 0;
  margin: 2rem;
`;