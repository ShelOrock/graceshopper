import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  background-color: white;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 8px 15px rgba(100, 100, 100, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0;
`;

export const NavigationLogo = styled.img`
  width: 300px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align:center;
  color: black;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  margin: 0.5rem;
  max-width: 150px;

`;

export const NavButton = styled.button`
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
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
`;

export const BreadCrumbContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`;

export const BreadCrumb = styled(TextLink)`
  color:black;
  margin: 1rem;
`;