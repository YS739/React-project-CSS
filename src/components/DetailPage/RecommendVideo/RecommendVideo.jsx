import { RecommendVideoList } from '../../../common/apis';
import Recommend from './Recommend';
import { useQuery } from 'react-query';

const RecommendVideo = ({ videoId }) => {
  const {
    isLoading,
    data: recommendList,
    isError,
  } = useQuery(['recommendList', videoId], () => RecommendVideoList(videoId));

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && (
        <>
          <p>Something is wrong..</p>
        </>
      )}
      {recommendList?.map((video) => (
        <Recommend key={video.id['videoId']} video={video} />
      ))}
    </>
  );
};

export default RecommendVideo;
