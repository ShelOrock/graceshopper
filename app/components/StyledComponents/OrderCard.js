import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  margin: 1rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
`;

export const Media = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`;