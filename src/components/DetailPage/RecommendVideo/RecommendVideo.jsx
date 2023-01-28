import { RecommendVideoList } from '../../../common/apis';
import Recommend from './Recommend';
import { useQuery } from 'react-query';
import RodingRecommend from './RodingRecommend';
import ErrorRecommendUI from './ErrorRecommendUI';

const RecommendVideo = ({ videoId }) => {
  const {
    isLoading,
    data: recommendList,
    isError,
  } = useQuery(['recommendList', videoId], () => RecommendVideoList(videoId));

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
