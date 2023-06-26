import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListContainer = styled.div`
  margin-top: 20px;
`;

export const MovieListUl = styled.ul`
  list-style: none;
`;

export const MovieListItem = styled.li`
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  color: grey;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #145f83;
    text-decoration: underline;
  }
`;
