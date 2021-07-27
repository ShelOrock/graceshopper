import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as StyledComponents from '../../StyledComponents/index.jsx';
const { StyledNavigation: { NavButton } } = StyledComponents;

import * as reduxThunks from '../../../redux/thunks.jsx';
const { authenticationThunks: { attemptUserLogout } } = reduxThunks;

export default ({ activeUser }) => {

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(attemptUserLogout(activeUser.id))
  }
  
  return <NavButton onClick={ handleOnClick }>Logout</NavButton>
};
