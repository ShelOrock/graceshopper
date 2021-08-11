import styled, { css } from 'styled-components';

export const List = css`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 1rem;
`;

export const StyledCardList = styled.ul`
  ${ List }
  align-items: center; 
  flex-wrap: wrap; 
  margin: 0;
`;

export const StyledLineList = styled.ul`
  ${ List } 
  flex-direction: column;
`;

export const StyledProductList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
