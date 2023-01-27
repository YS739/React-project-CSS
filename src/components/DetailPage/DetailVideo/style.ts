import styled from 'styled-components';

export const Test = styled.div`
  margin-left: 8%;
`;

// 디테일 페이지 전체 Body
export const DetailPageBody = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const DetailVideoContainer = styled.div`
  width: 60%;
  height: 85vh;
  margin-left: 8%;
`;

export const DetailVideoSection = styled.div`
  width: 100%;
  height: 100%;
`;

export const DetailVideoTitle = styled.div`
  font-size: 1.7rem;
  font-weight: 600;

  margin-top: 2%;
`;

export const ChannelBox = styled.div`
  width: 100%;

  display: flex;

  margin-top: 2%;
`;

export const ChannelImg = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 30px;

  margin-right: 1%;
`;

export const ChannelName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;

  margin-top: 2%;
`;

export const DetailVideoDesc = styled.div`
  width: 100%;

  background-color: red;
  font-size: 1.1rem;
`;

// 댓글 리스트
export const DetailCommentBody = styled.div`
  width: 100%;
  height: 100%;
`;

// 추천 리스트
export const RecommendVideoBody = styled.div`
  width: 40%;
  height: 100%;
`;
