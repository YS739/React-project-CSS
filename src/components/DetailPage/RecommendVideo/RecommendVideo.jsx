import { recommendVideoList } from '../../../common/apis';
import Recommend from './Recommend';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

const RecommendVideo = ({ videoId }) => {
  const {
    isLoading,
    data: recommendList,
    isError,
  } = useQuery(['recommendList', videoId], () => recommendVideoList(videoId));

  useEffect(() => {
    recommendVideoList(videoId);
  }, [videoId]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && (
        <>
          <p>Something is wrong.</p>
        </>
      )}
      {recommendList?.map((video) => (
        <Recommend key={video.id['videoId']} video={video} />
      ))}
    </>
  );
};

export default RecommendVideo;
