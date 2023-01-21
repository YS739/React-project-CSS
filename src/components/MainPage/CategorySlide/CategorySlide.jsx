import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { CategoryBox, Category, LeftIcon, RightIcon } from './style';
import { color } from '../../../common/color';

// 왼쪽, 오른쪽 화살표 커스텀
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <LeftIcon onClick={onClick}>
      <MdChevronLeft style={{ fontSize: 50, color: color.blue }} />
    </LeftIcon>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <RightIcon onClick={onClick}>
      <MdChevronRight style={{ fontSize: 50, color: color.blue }} />
    </RightIcon>
  );
};

const CategorySlide = () => {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '10px',
    centerMode: true,
    slidesToShow: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
  };
  return (
    <CategoryBox>
      <Slider {...settings}>
        <div>
          <Category>All</Category>
        </div>
        <div>
          <Category>HTML</Category>
        </div>
        <div>
          <Category>Javascript</Category>
        </div>
        <div>
          <Category>React</Category>
        </div>
        <div>
          <Category>ReactNative</Category>
        </div>
        <div>
          <Category>Typescript</Category>
        </div>
      </Slider>
    </CategoryBox>
  );
};

export default CategorySlide;
