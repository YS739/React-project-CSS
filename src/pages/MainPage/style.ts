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
  margin-left: 4%;
  box-sizing: border-box;

  @media screen and (max-width: 1100px) {
    width: 800px;
  }

  @media screen and (max-width: 750px) {
    width: 500px;
    margin-left: 10%;
  }
`;
