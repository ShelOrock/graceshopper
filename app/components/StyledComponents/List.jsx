import styled, { css } from 'styled-components';

export const List = css`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 1rem;
`;

export const CardList = styled.ul`
  ${ List }
  align-items: center;
`;

export const LineList = styled.ul`
  ${ List } 
  flex-direction: column;
`;
