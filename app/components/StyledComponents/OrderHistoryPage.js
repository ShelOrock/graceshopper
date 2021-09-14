import styled from 'styled-components';

export const StyledListItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: none;  
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
  margin: 1rem auto;
  padding: 1rem;
`;

export const StyledHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledOrder = styled.div`
  margin: 2rem 15rem;
  display: flex;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
  border-radius: 10px;
`;