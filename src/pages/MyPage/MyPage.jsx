import MyBookmark from '../../components/MyPage/MyBookmark/MyBookmark';
import MyComments from '../../components/MyPage/MyComments/MyComments';
import { Fragment } from 'react';

const MyPage = () => {
  return (
    <Fragment>
      MyPage
      <MyBookmark />
      <MyComments />
    </Fragment>
  );
};

export default MyPage;
