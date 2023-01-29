import { recommendVideoList } from '../../../common/apis';
import RecommendVideos from './RecommendVideos';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import LoadingRecommend from '../../SkeletonUI/LoadingRecommend';
import ErrorRecommendUI from '../../SkeletonUI/ErrorRecommendUI';

const RecommendVideoSection = ({ videoId }) => {
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
      {isLoading && <LoadingRecommend />}
      {isError && <ErrorRecommendUI />}
      {recommendList?.map((video) => (
        <RecommendVideos key={video.id['videoId']} video={video} />
      ))}
    </>
  );
};

export default RecommendVideoSection;
