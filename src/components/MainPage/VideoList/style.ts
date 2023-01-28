import styled from 'styled-components';

export const Videos = styled.div`
  width: 330px;
  height: 220px;
  margin-bottom: 40px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;

  :hover {
    width: 350px;
    height: 250px;
    transition: 0.7s;
  }
`;

export const Video = styled.div`
  width: 100%;
  height: 80%;
`;

export const VideoTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const VideoFooter = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const Creator = styled.div`
  font-size: 13px;
`;
