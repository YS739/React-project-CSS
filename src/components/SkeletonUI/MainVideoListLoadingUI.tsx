import React from 'react';
import styled from 'styled-components';
import { Videos } from '../../components/MainPage/VideoList/style';
import { VideoBox, VideoSection } from '../../pages/MainPage/style';

const MainVideoListLoadingUI = () => {
  return (
    <VideoSection>
      <VideoBox>
        <Videos>
          <VideoSkeleton />
          <VideoFooterSkeleton />
        </Videos>
        <Videos>
          <VideoSkeleton />
          <VideoFooterSkeleton />
        </Videos>
        <Videos>
          <VideoSkeleton />
          <VideoFooterSkeleton />
        </Videos>
        <Videos>
          <VideoSkeleton />
          <VideoFooterSkeleton />
        </Videos>
        <Videos>
          <VideoSkeleton />
          <VideoFooterSkeleton />
        </Videos>
        <Videos>
          <VideoSkeleton />
          <VideoFooterSkeleton />
        </Videos>
      </VideoBox>
    </VideoSection>
  );
};

export default MainVideoListLoadingUI;

// Style component
export const VideoSkeleton = styled.div`
  width: 100%;
  height: 70%;
  background-color: #e7e7e7;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const VideoFooterSkeleton = styled.div`
  width: 100%;
  height: 30%;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
