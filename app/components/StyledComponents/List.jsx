import styled, { css } from 'styled-components';

export const List = styled.css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`;

export const CardList = styled.ul`
  ${ List }
`;

export const LineList = styled.ul`
  ${ List } 
  flex-direction: column;
`;
