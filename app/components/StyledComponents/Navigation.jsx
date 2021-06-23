import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.div`
  background-color: white;
  box-shadow: #D5D5D5;
`;

export const NavigationLogo = styled.img`
  width: 300px;
`

export const NavLink = styled(Link)`
  background-color: #19647E;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
`;