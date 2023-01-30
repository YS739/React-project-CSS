import React from 'react';
import styled from 'styled-components';
import { Videos } from '../../components/MainPage/VideoList/style';
import { VideoSection } from '../../pages/MainPage/style';

const MainVideoListLoadingUI = () => {
  return (
    <VideoSection>
      <VideoBoxSkeleton>
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
      </VideoBoxSkeleton>
    </VideoSection>
  );
};

export default MainVideoListLoadingUI;

// Style component

export const VideoBoxSkeleton = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  margin-left: 3%;
  box-sizing: border-box;

  @media screen and (max-width: 1100px) {
    width: 800px;
  }

  @media screen and (max-width: 750px) {
    width: 500px;
    margin-left: 10%;
  }
`;

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
  background-color: #fff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
