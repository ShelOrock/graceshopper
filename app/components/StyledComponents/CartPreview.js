import styled from 'styled-components';

export const StyledPreview = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  margin: 1rem 4rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);  border: 1px solid lightgray;
  border-radius: 6px;
  border: none;
  width: 25%;
  backdrop-filter: blur(50px);
`;

export const StyledList = styled.div`
  max-height: 40vh;
  overflow-y: scroll;
`;

export const StyledPreviewListItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 1rem 0.5rem 0 1rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
`;

export const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0;
`;

export const StyledEmptyPreview = styled.div`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
`;