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
  RecommendVideoBox,
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
            height="700px"
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
      </DetailVideoContainer>

      <RecommendVideoBody>
        <DetailCommentBody>
          <AddComment video={video} />
        </DetailCommentBody>
        <RecommendVideoBox>
          <RecommendVideo videoId={video.id.videoId} />
        </RecommendVideoBox>
      </RecommendVideoBody>
    </DetailPageBody>
  );
};
export default DetailVideo;
