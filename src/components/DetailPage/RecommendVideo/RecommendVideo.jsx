import { recommendVideoList } from '../../../common/apis';
import Recommend from './Recommend';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import RodingRecommend from './RodingRecommend';
import ErrorRecommendUI from './ErrorRecommendUI';

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
      {isLoading && <RodingRecommend />}
      {isError && <ErrorRecommendUI />}
      {recommendList?.map((video) => (
        <Recommend key={video.id['videoId']} video={video} />
      ))}
    </>
  );
};

export default RecommendVideo;
