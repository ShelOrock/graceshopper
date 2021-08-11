import styled from 'styled-components';

export const StyledListItem = styled.div`
  display: flex;
  margin: 1rem;
  border-radius: 10px;
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

export const StyledBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledQuantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`;