import styled from 'styled-components';

// 디테일 페이지 전체 Body
export const DetailPageBody = styled.div`
  margin: 0 auto;
  width: 1000px;
  justify-content: center;
   @media screen and (max-width: 1050px) {
    width: 80%;
  }
    @media screen and (max-width: 900px) {
    width: 700px;
  }
      @media screen and (max-width: 700px) {
    width: 420px;
  }
`;

export const DetailVideoContainer = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    width: 360px;
  }
`;

export const DetailVideoSection = styled.div`
`;

export const DetailVideoTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 2%;
  letter-spacing: -1px;
  @media screen and (max-width: 480px) {
    width: 450px;
  }
`;

export const ChannelBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 2%;
`;

export const ChannelImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  margin-right: 1%;
`;

export const ChannelName = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

// 댓글 리스트
export const DetailCommentBody = styled.div`
  width: 550px;
  margin-top: 30px;
  @media screen and (max-width: 1050px) {
    width: 58%;
  }
   @media screen and (max-width: 800px) {
    width: 59%;
  }
     @media screen and (max-width: 700px) {
    width: 35%;
  }
`;

// 추천 리스트
export const RecommendVideoBody = styled.div`
  width: 1200px;
  display: flex;
  @media screen and (max-width: 780px) {
    display: block;
  }
  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const RecommendVideoBox = styled.div`
  width: 430px;
`;
