import styled, { css } from 'styled-components';

export const Layout = css`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 1rem;
`;

export const Grid = styled.ul`
  ${ Layout }
  align-items: center; 
  flex-wrap: wrap; 
  margin: 0;
`;

export const List = styled.ul`
  ${ Layout } 
  flex-direction: column;
`;
