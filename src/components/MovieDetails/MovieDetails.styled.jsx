import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  display: flex;
  gap: 20px;
  border-botom: 1px solid #000;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const MovieImage = styled.img`
  width: 300px;
  height: 450px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  cover: fit;
`;

export const MovieInfoContainer = styled.div`
  flex-direction: column;
`;

export const MovieScore = styled.p`
  width: 200px;
`;

export const MovieOverview = styled.p`
  width: 500px;
`;

export const AditionalInfoContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const AditionalInfoContainerLi = styled.li`
  list-style: none;
`;

export const AditionalInfoLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  color: grey;

  &:hover {
    color: #31517e;
  }
`;
