import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`
  margin: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 2rem;
`;

export const Empty = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
  border-radius: 10px;
  margin: 5rem auto;
  padding: 2rem;
`;
