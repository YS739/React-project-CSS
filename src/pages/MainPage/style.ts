import styled from 'styled-components';

// 비디오 리스트
export const VideoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const VideoBox = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  margin-right: 3%;
  margin-left: 7%;

  @media screen and (max-width: 1000px) {
    margin-left: 15%;
  }
  @media screen and (max-width: 900px) {
    margin-left: 9%;
  }
  @media screen and (max-width: 800px) {
    margin-left: 26%;
  }
  @media screen and (max-width: 600px) {
    margin-left: 23%;
  }
  @media screen and (max-width: 500px) {
    margin-left: 16%;
  }
`;
