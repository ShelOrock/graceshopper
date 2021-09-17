import styled from 'styled-components';

export const Main = styled.div`
  margin: 2rem 15rem;
  display: flex;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
  border-radius: 10px;
`;

export const Media = styled.div`
  width: 50%;
`;

export const Content = styled.div`
  width: 50%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  margin: 1rem 0 0 1rem;
`;

export const Actions = styled.div`
  margin: 1rem;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.5rem;
`;

export const QuantityActions = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem;
`;