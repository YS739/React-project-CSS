import AddComment from '../../components/DetailPage/AddComment/AddComment';
import DetailVideo from '../../components/DetailPage/DetailVideo/DetailVideo';
import RecommendVideo from '../../components/DetailPage/RecommendVideo/RecommendVideo';
import { DetialFragment, DetailLeftBody, DetailRight } from './style';

const DetailPage = () => {
  return (
    <DetialFragment>
      {/* <DetailLeftBody> */}
      <DetailVideo />
      {/* <AddComment /> */}
      {/* </DetailLeftBody> */}
      {/* <DetailRight> */}
      {/* <RecommendVideo /> */}
      {/* </DetailRight> */}
    </DetialFragment>
  );
};

export default DetailPage;
