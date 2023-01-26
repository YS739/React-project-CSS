import { RecommendVideoList } from '../../../common/apis';
import Recommend from './Recommend';
import { useState } from 'react';
import { useQuery } from 'react-query';

const RecommendVideo = ({ videoId }) => {
  // console.log(id);

  const {
    // isLoading: isLoadingCategory,
    data: recommendList,
    // error: errorCategory,
    // isError: isErrorCategory,
  } = useQuery(['recommendList', videoId], () => RecommendVideoList(videoId));
  // console.log(recommendList);
  return (
    <>
      {recommendList?.map((video) => (
        <Recommend key={video.id['videoId']} video={video} />
      ))}
    </>
  );
};

export default RecommendVideo;
