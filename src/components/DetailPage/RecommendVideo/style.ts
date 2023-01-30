import styled from 'styled-components';

export const RecommendBody = styled.div`
  width: 100%;
  margin-left: 3%;
  padding: 1%;

  cursor: pointer;
  @media screen and (max-width: 1050px) {
    width: 160%;
  }
    @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const ViewBody = styled.div`
  display: flex;
  margin-bottom: 2%;
`;

export const VideoViewBox = styled.div`
  width: 180px;
`;

export const VideoView = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-right: 3%;
  @media screen and (max-width: 1200px) {
    width: 170px;
  }
`;

export const VideoViewTextBody = styled.div`
  width: 58%;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 1200px) {
    width: 550px;
  }
`;

export const VideoTextBody = styled.div`
  width: 100%;
`;

export const VideoText = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const VideoTitle = styled.div`
  width: 90%;
  height: 40%;
`;

export const VideoNickName = styled.div`
  font-size: 0.8rem;
  margin-bottom: 2%;
  color: rgb(150, 150, 150);
`;

export const VideoTime = styled.div`
  font-size: 0.8rem;
  color: rgb(150, 150, 150);
`;
