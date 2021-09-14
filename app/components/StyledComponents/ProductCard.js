import styled from 'styled-components';

export const Main = styled.div`
  width: calc(100% / 4 - 2rem);
  margin: 1rem;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
  border: none;
  border-radius: 10px;
`;

export const Actions = styled.div`
  display: flex;
  margin: 1rem;
`;

export const Media = styled.div`
  width: 100%;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
