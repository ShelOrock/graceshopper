import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 50%;
  margin: 4rem auto;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
  border: none;
  border-radius: 10px;
`;

export const FormHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormTitle = styled.h1`
  font-size: 2rem;
  margin: 1rem;
`;

export const FormModulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const InputModule = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75rem 0;
  width: 100%;
`;

export const InputLabelFeedbackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;

export const TextInputField = styled.input`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0.8rem 0.75rem;
  margin: 0 1rem;
`;

export const InputLabel = styled.p`
  color: black;
  font-size: 0.9rem;
  text-transform: capitalize;
  margin: 0.25rem 0;
`;

export const InputFeedback = styled.p`
  color: #E93935;
  font-size: 0.9rem;
  margin: 0.25rem 0;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0.5rem;
`;