import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 2rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 2rem;
`;

export const Heading = styled.h2`
  margin: 0 0.5rem;
  font-size: 1.2rem;
  margin: 0.5rem;
`;

export const SubHeading = styled.h3`
  font-size: 1rem;
  margin: 0rem 0.5rem;
`;

export const Body = styled.p`
  font-size: 0.9rem;
  color ${ ({ variant }) => variant == 'secondary' ? 'white' : 'black' };
  margin: 1rem 0.5rem;
`;

export const SmallBody = styled.p`
  margin: 1rem 1rem 1rem 0.5rem;
  font-size: 0.9rem;
  line-height: 0;
`;

export const ButtonType = styled.p`
  margin: 0.75rem 0.25rem 0.75rem 0.5rem;
  font-size: 0.9rem;
  line-height: 0;
`;
