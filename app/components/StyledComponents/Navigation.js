import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem;
  margin: 0;
`;

export const StyledLogo = styled.img`
  width: 300px;
  height: auto;
  margin: 0 0.5rem;
`;

export const StyledNavigationLinks = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
`;

export const StyledNavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  margin: 0.5rem;
  max-width: 150px;
`;

export const StyledNavigationButton = styled.button`
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
  margin: 2rem 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0.5rem 0;
`;

export const StyledBreadCrumbNavigation = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`;

export const StyledBreadCrumb = styled(TextLink)`
  color: black;
  margin: 1rem;
`;