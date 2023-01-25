import { useLocation } from 'react-router-dom';
import AddComment from '../AddComment/AddComment';
import ChannelInfo from '../ChannelInfo/ChannelInfo';
import CommentList from '../CommentList/CommentList';
import RecommendVideo from '../RecommendVideo/RecommendVideo';
import {
  DetailVideoContainer,
  DetailVideoSection,
  DetailVideoTitle,
  DetailVideoDesc,
  RecommendVideoBody,
  DetailCommentBody,
  DetailPageBody,
} from './style';
import TestLogin from './TestLogin';

export default function DetailVideo() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  console.log(video);
  return (
    <DetailPageBody>
      <TestLogin />
      <DetailVideoContainer>
        <DetailVideoSection>
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="75%"
            src={`http://www.youtube.com/embed/${video.id.videoId}`}
            frameBorder="0"
            title="유튜브"
          />
          <DetailVideoTitle>{title}</DetailVideoTitle>
          <ChannelInfo id={channelId} name={channelTitle} />
          <DetailVideoDesc>{description}</DetailVideoDesc>
        </DetailVideoSection>
        <DetailCommentBody>
          <AddComment />
        </DetailCommentBody>
      </DetailVideoContainer>

      <RecommendVideoBody>
        {/* <RecommendVideo id={video.id.videoId} /> */}
      </RecommendVideoBody>
    </DetailPageBody>
  );
}
