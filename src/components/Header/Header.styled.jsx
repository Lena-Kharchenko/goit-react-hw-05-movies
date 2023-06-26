import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  color: grey;
  &:hover {
    color: #145f83;
  }
  &.active {
    color: #145f83;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px;
  list-style: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: #c1fff7;
  border-radius: 10px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;
