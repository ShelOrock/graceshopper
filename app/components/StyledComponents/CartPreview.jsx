import styled from 'styled-components';

export const CartPreviewContainer = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  margin: 1rem 2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);  border: 1px solid lightgray;
  border-radius: 6px;
  width: 20%;
`;

export const CartPreviewListItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 2rem 0;
`;