import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyCart = styled.div`
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