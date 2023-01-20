import AddComment from '../../components/DetailPage/AddComment/AddComment';
import CommentList from '../../components/DetailPage/CommentList/CommentList';
import RecommendVideo from '../../components/DetailPage/RecommendVideo/RecommendVideo';
import { Fragment } from 'react';

const DetailPage = () => {
  return (
    <Fragment>
      DetailPage
      <RecommendVideo />
      <AddComment />
      <CommentList />
    </Fragment>
  );
};

export default DetailPage;
