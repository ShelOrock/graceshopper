import styled from 'styled-components';

export const ProductPageContainer = styled.div`
  margin: 2rem;
  display: flex;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
  border-radius: 10px;
`;

export const ProductImage = styled.img`
  width: 50%;
`;

export const ProductInfoAndButtonsContainer = styled.div`
  margin: 3rem;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuantityButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;