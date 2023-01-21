import styled from 'styled-components';
import { color } from '../../../common/color';

export const Videos = styled.div`
  width: 330px;
  height: 200px;
  margin-bottom: 40px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;

  :hover {
    width: 350px;
    height: 220px;
    transition: 0.7s;
  }
`;

export const Video = styled.div`
  width: 100%;
  height: 80%;
`;

export const VideoTitle = styled.div`
  font-size: 16px;
`;

export const Creator = styled.div`
  font-size: 13px;
`;
