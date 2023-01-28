import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
const ErrorRecommendUI = () => {
  return (
    <ErrorRecommendBody>
      <ErrorViewBody>
        <ErrorVideoViewBox>
          <ErrorIcon>
            <MdClose />
          </ErrorIcon>
        </ErrorVideoViewBox>

        <ErrorVideoViewTextBody>
          <ErrorVideoTextBody>
            <>데이터를 불러오지 못했습니다.</>
          </ErrorVideoTextBody>

          <ErrorVideoTitle></ErrorVideoTitle>
        </ErrorVideoViewTextBody>
      </ErrorViewBody>
    </ErrorRecommendBody>
  );
};

const ErrorRecommendBody = styled.div`
  width: 100%;
  height: 18vh;
  margin-left: 11%;
`;

const ErrorViewBody = styled.div`
  width: 80%;
  height: 100%;

  display: flex;

  margin-bottom: 2%;
`;

const ErrorVideoViewBox = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 10px;

  margin-right: 3%;
  background-color: #e7e7e7;

  font-size: 20px;
`;

const ErrorIcon = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 70px;

  color: #6d6d6d;
`;

const ErrorVideoViewTextBody = styled.div`
  width: 100%;
  height: 100%;
`;

const ErrorVideoTextBody = styled.div`
  width: 80%;
  height: 20%;

  border-radius: 10px;
  background-color: #e7e7e7;

  margin-top: 2%;
  padding-left: 2%;

  display: flex;
  align-items: center;

  font-weight: 600;
`;

const ErrorVideoTitle = styled.div`
  width: 50%;
  height: 15%;

  border-radius: 10px;
  background-color: #e7e7e7;

  margin-top: 5%;
`;

export default ErrorRecommendUI;
