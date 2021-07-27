import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  margin: 2rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
`;

export const Heading = styled.h2`
  margin: 0 0.5rem;
  font-size: 1.2rem;
`;

export const SubHeading = styled.h3`
  margin: 0 0.5rem 0.5rem;
  font-size: 1rem
`;

export const Body = styled.p`
  font-size: 0.9rem;
  color ${ ({ variant }) => variant == 'secondary' ? 'white' : 'black' };
  line-height: 0;
  margin: 0;
`;

export const SmallBody = styled.p`
  margin: 1rem 0.5rem;
  font-size: 0.9rem;
  color: white;
  line-height: 0;
`;
