import AddComment from '../../components/DetailPage/AddComment/AddComment';
import CommentList from '../../components/DetailPage/CommentList/CommentList';
import RecommendVideo from '../../components/DetailPage/RecommendVideo/RecommendVideo';
// import { Fragment } from 'react';
import { DetialFragment, DetailLeftBody, DetailRight } from './style';

const DetailPage = () => {
  return (
    <DetialFragment>
      <DetailLeftBody>
        <AddComment />
        <CommentList />
      </DetailLeftBody>
      <DetailRight>
        <RecommendVideo />
      </DetailRight>
    </DetialFragment>
  );
};

export default DetailPage;
