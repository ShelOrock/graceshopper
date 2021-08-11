import styled from 'styled-components';

export const StyledForm = styled.div`
  width: 50%;
  margin: 2rem auto;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
  border: none;
  border-radius: 10px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1.5rem;
`;

export const FormTitle = styled.h1`
  font-size: 2rem;
  margin: 1rem;
`;

export const StyledBody = styled.div`
`;

export const StyledModules = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const StyledGroup = styled.div`
  display: flex;
  width: 100%;
`

export const StyledInputModule = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const StyledInformation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;

export const StyledInput = styled.input`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.8rem 0.75rem;
  margin: 0 1rem;
  background-color: transparent;
`;

export const StyledLabel = styled.p`
  color: black;
  font-size: 0.9rem;
  text-transform: capitalize;
  margin: 0.25rem 0;
`;

export const StyledFeedback = styled.p`
  color: #E93935;
  font-size: 0.9rem;
  margin: 0.25rem 0;
`;

export const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin: 2rem 1.5rem;
`;