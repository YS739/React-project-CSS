import { useLocation } from 'react-router-dom';
import AddComment from '../AddComment/AddComment';
import RecommendVideo from '../RecommendVideo/RecommendVideo';
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
} from './style';

// interface DetailIframeJ {
//   id: string;
//   type: string;
//   width: string;
//   height: string;
//   src: string;
//   frameBorder: string;
//   title: string;
// }

export default function DetailVideo() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelTitle, thumbnails } = video.snippet;

  return (
    <DetailPageBody>
      <DetailVideoContainer>
        {/* <TestLogin /> */}
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
          <ChannelBox>
            <ChannelImg src={thumbnails.default.url} alt="" />
            <ChannelName>{channelTitle}</ChannelName>
          </ChannelBox>
        </DetailVideoSection>
        <DetailCommentBody>
          <AddComment video={video} />
        </DetailCommentBody>
      </DetailVideoContainer>

      <RecommendVideoBody>
        <RecommendVideo videoId={video.id.videoId} />
      </RecommendVideoBody>
    </DetailPageBody>
  );
}
