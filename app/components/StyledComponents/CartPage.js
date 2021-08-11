import styled from 'styled-components';

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCartItem = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin: 1rem auto;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
`;

export const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
`;

export const StyledButtons = styled.div`
  display: flex;
  margin: 2rem -0.5rem;
`;

export const StyledBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledQuantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 1.5rem;
`;

export const StyledEmptyCart = styled.div`
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