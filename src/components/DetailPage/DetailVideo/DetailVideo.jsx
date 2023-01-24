import { useLocation } from 'react-router-dom';
import ChannelInfo from '../ChannelInfo/ChannelInfo';
import RecommendVideo from '../RecommendVideo/RecommendVideo';
import { DetailVideoContainer } from './style';
import TestLogin from './TestLogin';

export default function DetailVideo() {
  // const {
  //   state: { video },
  // } = useLocation();
  // const { title, channelId, channelTitle, description } = video.snippet;
  // console.log(video);
  return (
    <>
      <TestLogin />
      <DetailVideoContainer>
        {/* <section>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title="유튜브"
        />
        <div>{title}</div>
        <ChannelInfo id={channelId} name={channelTitle} />
        <pre>{description}</pre>
      </section>
      <section>
        <RecommendVideo id={video.id} />
      </section> */}
      </DetailVideoContainer>
    </>
  );
}
