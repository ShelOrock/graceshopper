import styled from 'styled-components';

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyShoppingCartMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const CartListItemContainer = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  background-color: white;
  border-radius: 10px;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);`;

export const CartListItemButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoQuantityContainer = styled.div`
  width: 100%;
  height: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
`;

export const NameButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const QuantityTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuantityButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityBody = styled.p`
  font-size: 0.9rem;
  color ${ ({ variant }) => variant == 'secondary' ? 'white' : 'black' };
  line-height: 0;
  margin: 1rem;
`;