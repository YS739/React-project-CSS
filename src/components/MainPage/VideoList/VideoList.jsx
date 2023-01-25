import { useNavigate } from 'react-router-dom';
import { Videos, Video, VideoTitle, VideoFooter, Creator } from './style';
import { format, register } from 'timeago.js';
import KoLocale from 'timeago.js/lib/lang/ko';

// 비디오 생성날짜 한국어로 표기하기
register('ko', KoLocale);

const VideoList = ({ video }) => {
  const navigate = useNavigate();

  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    // 클릭한 영상의 id로 이동하기
    <Videos onClick={() => navigate(`/detail/${video.id.videoId}`)}>

      <Video>
        <img
          width={'100%'}
          height={'90%'}
          src={thumbnails.medium.url}
          alt="videoThumbnail"
        />
      </Video>
      <VideoTitle>
        {title.slice(0, 21)}
        {title.length > 21 && '...'}
      </VideoTitle>
      <VideoFooter>
        <div>{format(publishedAt, 'ko')}</div> <Creator>{channelTitle}</Creator>
      </VideoFooter>
    </Videos>
  );
};

export default VideoList;
