import React from 'react';
import styled from 'styled-components';

const RodingRecommend = () => {
  return (
    <RodingRecommendBody>
      <RodingViewBody>
        <RodingVideoViewBox></RodingVideoViewBox>

        <RodingVideoViewTextBody>
          <RodingVideoTextBody></RodingVideoTextBody>

          <RodingVideoTitle></RodingVideoTitle>
        </RodingVideoViewTextBody>
      </RodingViewBody>

      <RodingViewBody>
        <RodingVideoViewBox></RodingVideoViewBox>

        <RodingVideoViewTextBody>
          <RodingVideoTextBody></RodingVideoTextBody>

          <RodingVideoTitle></RodingVideoTitle>
        </RodingVideoViewTextBody>
      </RodingViewBody>

      <RodingViewBody>
        <RodingVideoViewBox></RodingVideoViewBox>

        <RodingVideoViewTextBody>
          <RodingVideoTextBody></RodingVideoTextBody>

          <RodingVideoTitle></RodingVideoTitle>
        </RodingVideoViewTextBody>
      </RodingViewBody>

      <RodingViewBody>
        <RodingVideoViewBox></RodingVideoViewBox>

        <RodingVideoViewTextBody>
          <RodingVideoTextBody></RodingVideoTextBody>

          <RodingVideoTitle></RodingVideoTitle>
        </RodingVideoViewTextBody>
      </RodingViewBody>

      <RodingViewBody>
        <RodingVideoViewBox></RodingVideoViewBox>

        <RodingVideoViewTextBody>
          <RodingVideoTextBody></RodingVideoTextBody>

          <RodingVideoTitle></RodingVideoTitle>
        </RodingVideoViewTextBody>
      </RodingViewBody>
    </RodingRecommendBody>
  );
};

const RodingRecommendBody = styled.div`
  width: 100%;
  height: 18vh;
  margin-left: 11%;
`;

const RodingViewBody = styled.div`
  width: 80%;
  height: 100%;

  display: flex;

  margin-bottom: 2%;
`;

const RodingVideoViewBox = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 10px;

  margin-right: 3%;
  background-color: #e7e7e7;
`;

const RodingVideoViewTextBody = styled.div`
  width: 100%;
  height: 100%;
`;

const RodingVideoTextBody = styled.div`
  width: 80%;
  height: 20%;

  border-radius: 10px;
  background-color: #e7e7e7;

  margin-top: 2%;
`;

const RodingVideoTitle = styled.div`
  width: 50%;
  height: 15%;

  border-radius: 10px;
  background-color: #e7e7e7;

  margin-top: 5%;
`;
export default RodingRecommend;
