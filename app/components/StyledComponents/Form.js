import styled from 'styled-components';

export const Main = styled.div`
  width: 50%;
  margin: 2rem auto;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
  border: none;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.5rem;
`;

export const Body = styled.div``;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin: 2rem 1.5rem;
`;