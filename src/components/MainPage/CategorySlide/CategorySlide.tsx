import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { CategoryBox, Category, LeftIcon, RightIcon } from './style';
import { colors } from '../../../common/colors';
import React, { MouseEventHandler } from 'react';

interface Props {
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

// 왼쪽, 오른쪽 화살표 커스텀
const SampleNextArrow = (props: Props) => {
  const { onClick } = props;
  return (
    <LeftIcon onClick={onClick}>
      <MdChevronLeft style={{ fontSize: 50, color: colors.GREY }} />
    </LeftIcon>
  );
};

const SamplePrevArrow: React.FC<{
  onClick: MouseEventHandler<HTMLSpanElement>;
}> = (props) => {
  const { onClick } = props;
  return (
    <RightIcon onClick={onClick}>
      <MdChevronRight style={{ fontSize: 50, color: colors.GREY }} />
    </RightIcon>
  );
};

const CategorySlide = ({ categoryClick, onClick }: any) => {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '10px',
    centerMode: true,
    slidesToShow: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow onClick={onClick} />,
    swipeToSlide: true,
  };
  return (
    <CategoryBox>
      <Slider {...settings}>
        <div>
          <Category onClick={() => categoryClick('클론 코딩하기')}>
            All
          </Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('HTML 클론 코딩')}>
            HTML
          </Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('CSS 클론 코딩')}>
            CSS
          </Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('Javascript 클론 코딩')}>
            Javascript
          </Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('React 클론 코딩')}>
            React
          </Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('React Native 클론')}>
            ReactNative
          </Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('typescript basic project')}>
            Typescript
          </Category>
        </div>
      </Slider>
    </CategoryBox>
  );
};

export default CategorySlide;
