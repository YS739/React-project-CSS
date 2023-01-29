import React from 'react';
import styled from 'styled-components';
import { VideoSection } from '../../pages/MainPage/style';
import { Videos } from '../MainPage/VideoList/style';
import { VideoFooterSkeleton, VideoSkeleton } from './MainVideoListLoadingUI';

const MainErrorUI = () => {
  return (
    <VideoSection>
      <VideoBoxSkeleton>
        <Videos>
          <VideoSkeleton>
            <ErrorText>
              X<br />
              데이터를 불러오지 못 했습니다.
            </ErrorText>
          </VideoSkeleton>
          <VideoFooterSkeleton />
        </Videos>
      </VideoBoxSkeleton>
    </VideoSection>
  );
};

export default MainErrorUI;

//Styled component
const VideoBoxSkeleton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.div`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin-top: 50px;
`;
