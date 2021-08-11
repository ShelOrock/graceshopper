import styled, { css } from 'styled-components';

export const RowsAndColumns = css`
  display: flex;
  align-items: ${ ({ alignItems }) => alignItems };
  justify-content: ${ ({ justifyContent }) => justifyContent };
`;

export const Row = styled.div`
  ${ RowsAndColumns }
`;

export const Column = styled.div`
  ${ RowsAndColumns }
  flex-direction: column;
`;