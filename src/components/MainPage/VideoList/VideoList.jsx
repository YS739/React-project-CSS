import { useNavigate } from 'react-router-dom';
import { Videos, Video, VideoTitle, Creator } from './style';

const VideoList = ({ video }) => {
  const navigate = useNavigate();

  return (
    // TODO: navigate id = `/${video.id}` 등으로 바꾸기
    <Videos onClick={() => navigate(`/:id`)}>
      <Video>
        {/* FIXME: 화질... 수정 필요 */}
        <img
          width={'100%'}
          height={'90%'}
          src={video.snippet.thumbnails.default.url}
          alt="videoThumbnail"
        />
      </Video>
      {/* TODO: 글자수 자르기 */}
      <VideoTitle>
        {video.snippet.title.slice(0, 25)}
        {video.snippet.title.length > 25 && '...'}
      </VideoTitle>
      <Creator>{video.snippet.channelTitle}</Creator>
    </Videos>
  );
};

export default VideoList;
