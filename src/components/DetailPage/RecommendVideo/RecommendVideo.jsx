import {
  RecommendBody,
  ViewBody,
  VideoView,
  TextBody,
  VideoText,
  VideoNickName,
  VideoTime,
} from './style';

const RecommendVideo = () => {
  return (
    <RecommendBody>
      <ViewBody>
        <VideoView src="https://i.ytimg.com/vi/WjIlVlmmNqs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcQFX6Yn-zDQndvKO3cj_XGOFoOg" />
        <TextBody>
          <VideoText>한시간만에 Node.js 백엔드 기초 끝내기</VideoText>
          <VideoNickName>조코딩 JoCoding</VideoNickName>
          <VideoTime>2month ago</VideoTime>
        </TextBody>
      </ViewBody>
    </RecommendBody>
  );
};

export default RecommendVideo;
