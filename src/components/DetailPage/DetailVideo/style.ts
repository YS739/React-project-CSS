import styled from 'styled-components';

// export const Test = styled.div`
//   margin-left: 8%;
// `;

// 디테일 페이지 전체 Body
export const DetailPageBody = styled.div`
  margin: 0 auto;
  max-width: 100%;
  /* height: 100%; */
  /* background-color: aliceblue; */
  /* margin: 0 auto; */
  /* margin: 0px 100px; */
  /* display: flex; */
  /* max-width: 1600px; */
  justify-content: center;
`;

export const DetailVideoContainer = styled.div`
  max-width: 95%;
  /* height: 500px; */
  /* background-color:blueviolet; */
  /* margin-left: 8%; */
  @media screen and (max-width: 480px) {
    width: 360px;
    margin: 0 auto;
  }
`;

export const DetailVideoSection = styled.div`
  width: 100%;
  /* height: 100%; */
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
  /* margin-top: 2%; */
`;

// export const DetailVideoDesc = styled.div`
//   width: 100%;

//   background-color: red;
//   font-size: 1.1rem;
// `;

// 댓글 리스트
export const DetailCommentBody = styled.div`
  width: 650px;
  margin-top: 30px;
  /* height: 100%; */
  /* background-color: aqua; */
`;

// 추천 리스트
export const RecommendVideoBody = styled.div`
  width: 1200px;
  /* height: 100%; */

  display: flex;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 780px) {
    display: block;
  }
`;

export const RecommendVideoBox = styled.div`
  width: 530px;
`;
