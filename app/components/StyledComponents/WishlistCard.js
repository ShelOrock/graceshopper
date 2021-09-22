import styled from 'styled-components';

export const Main = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin: 1rem auto;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
`;

export const Media = styled.div`
  width: 150px;
  height: 100%;
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

export const HeaderActions = styled.div`
  display: flex;
  margin: 2rem -0.5rem;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BodyActions = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem;
`;
