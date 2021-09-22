import styled from 'styled-components';

export const Main = styled.div`
  position: absolute;
  top: 130px;
  right: 135px;
  margin: 1rem 4rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);  border: 1px solid lightgray;
  border-radius: 6px;
  border: none;
  width: 25%;
  backdrop-filter: blur(50px);
`;

export const List = styled.div`
  max-height: 40vh;
  overflow-y: scroll;
`;

export const Actions = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 1rem;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
`;