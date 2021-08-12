import styled from 'styled-components';

export const StyledProductPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledProduct = styled.div`
  margin: 2rem 15rem;
  display: flex;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
  border-radius: 10px;
`;

export const StyledImage = styled.img`
  width: 50%;
`;

export const StyledContent = styled.div`
  width: 50%;
  margin: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const StyledInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDescription = styled.div`
  margin: 1rem 0 0 1.5rem;
`;

export const StyledButtons = styled.div`
  margin: 1rem;
`;

export const StyledBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.5rem;
`;

export const StyledQuantity = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 2rem;
`;