import styled from 'styled-components';

export const StyledShopPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaginateBody = styled.p`
  font-size: 0.9rem;
  color ${ ({ variant }) => variant == 'secondary' ? 'white' : 'black' };
  line-height: 0;
  margin: 1rem;
`;