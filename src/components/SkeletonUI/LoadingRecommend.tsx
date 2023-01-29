import React from 'react';
import styled from 'styled-components';

const LoadingRecommend = () => {
  return (
    <LoadingRecommendBody>
      <LoadingViewBody>
        <LoadingVideoViewBox />
        <LoadingVideoViewTextBody>
          <LoadingVideoTextBody />
          <LoadingVideoTitle />
        </LoadingVideoViewTextBody>
      </LoadingViewBody>

      <LoadingViewBody>
        <LoadingVideoViewBox />
        <LoadingVideoViewTextBody>
          <LoadingVideoTextBody />
          <LoadingVideoTitle />
        </LoadingVideoViewTextBody>
      </LoadingViewBody>

      <LoadingViewBody>
        <LoadingVideoViewBox />
        <LoadingVideoViewTextBody>
          <LoadingVideoTextBody />
          <LoadingVideoTitle />
        </LoadingVideoViewTextBody>
      </LoadingViewBody>

      <LoadingViewBody>
        <LoadingVideoViewBox />
        <LoadingVideoViewTextBody>
          <LoadingVideoTextBody />
          <LoadingVideoTitle />
        </LoadingVideoViewTextBody>
      </LoadingViewBody>
    </LoadingRecommendBody>
  );
};
export default LoadingRecommend;

// Style component
const LoadingRecommendBody = styled.div`
  width: 100%;
  height: 18vh;
  margin-left: 11%;
`;

const LoadingViewBody = styled.div`
  width: 80%;
  height: 100%;

  display: flex;

  margin-bottom: 2%;
`;

const LoadingVideoViewBox = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 10px;

  margin-right: 3%;
  background-color: #e7e7e7;
`;

const LoadingVideoViewTextBody = styled.div`
  width: 100%;
  height: 100%;
`;

const LoadingVideoTextBody = styled.div`
  width: 80%;
  height: 20%;

  border-radius: 10px;
  background-color: #e7e7e7;

  margin-top: 2%;
`;

const LoadingVideoTitle = styled.div`
  width: 50%;
  height: 15%;

  border-radius: 10px;
  background-color: #e7e7e7;

  margin-top: 5%;
`;
