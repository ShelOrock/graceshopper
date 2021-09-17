import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align:center;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  margin: 0.5rem;
  max-width: 150px;
  cursor: pointer;
  font-size: 1rem;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  margin: 1rem 0;
  color: black;
`;