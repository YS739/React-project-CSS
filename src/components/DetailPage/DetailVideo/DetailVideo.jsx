import { useLocation } from 'react-router-dom';
import AddComment from '../AddComment/AddComment';
import RecommendVideoSection from '../RecommendVideo/RecommendVideoSection';
import {
  DetailVideoContainer,
  DetailVideoSection,
  DetailVideoTitle,
  RecommendVideoBody,
  DetailCommentBody,
  DetailPageBody,
  ChannelName,
  ChannelBox,
  ChannelImg,
  RecommendVideoBox,
} from './style';

const DetailVideo = () => {
  const {
    state: { video },
  } = useLocation();
  const { title, channelTitle, thumbnails } = video.snippet;

  return (
    <DetailPageBody>
      <DetailVideoContainer>
        <DetailVideoSection>
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="600px"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            title="유튜브"
          />
          <DetailVideoTitle>{title}</DetailVideoTitle>
          <ChannelBox>
            <ChannelImg src={thumbnails.default.url} alt="" />
            <ChannelName>{channelTitle}</ChannelName>
          </ChannelBox>
        </DetailVideoSection>
      </DetailVideoContainer>

      <RecommendVideoBody>
        <DetailCommentBody>
          <AddComment video={video} />
        </DetailCommentBody>
        <RecommendVideoBox>
          <RecommendVideoSection videoId={video.id.videoId} />
        </RecommendVideoBox>
      </RecommendVideoBody>
    </DetailPageBody>
  );
};
export default DetailVideo;
