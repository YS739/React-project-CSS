import styled from 'styled-components';
import { color } from '../../../common/color';

const VideoList = () => {
  return (
    <VideoSection>
      <VideoBox>
        <Videos></Videos>
        <Videos></Videos>
        <Videos></Videos>
        <Videos></Videos>
        <Videos></Videos>
        <Videos></Videos>
        <Videos></Videos>
        <Videos></Videos>
      </VideoBox>
    </VideoSection>
  );
};

export default VideoList;

// TODO: style.js로 분리하기
export const VideoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoBox = styled.div`
  width: 1100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap; ;
`;

export const Videos = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid ${color.navy};
  background-color: ${color.blue};
  margin-bottom: 40px;
`;
