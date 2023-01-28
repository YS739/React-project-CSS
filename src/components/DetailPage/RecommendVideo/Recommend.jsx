import { useNavigate } from 'react-router-dom';
import {
  ViewBody,
  VideoView,
  VideoViewTextBody,
  VideoText,
  VideoNickName,
  VideoTime,
  RecommendBody,
  VideoTitle,
  VideoViewBox,
  VideoTextBody,
} from './style';
import { format, register } from 'timeago.js';
import KoLocale from 'timeago.js/lib/lang/ko';

register('ko', KoLocale);

const Recommend = ({ video }) => {
  const navigate = useNavigate();

  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <RecommendBody
      onClick={() =>
        navigate(`/detail/${video.id.videoId}`, { state: { video } })
      }
    >
      <ViewBody>
        <VideoViewBox>
          <VideoView src={thumbnails.medium.url} alt="videoThumbnail" />
        </VideoViewBox>

        <VideoViewTextBody>
          <VideoTextBody>
            <VideoText>{title}</VideoText>
          </VideoTextBody>

          <VideoTitle>
            <VideoNickName>{channelTitle} </VideoNickName>
            <VideoTime>{format(publishedAt, 'ko')}</VideoTime>
          </VideoTitle>
        </VideoViewTextBody>
      </ViewBody>
    </RecommendBody>
  );
};
export default Recommend;
