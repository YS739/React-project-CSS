import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { CategoryBox, Category, LeftIcon, RightIcon } from './style';
import { color } from '../../../common/color';
import React, { MouseEventHandler } from 'react';

// 왼쪽, 오른쪽 화살표 커스텀
const SampleNextArrow: React.FC<{
  onClick: MouseEventHandler<HTMLSpanElement>;
}> = (props) => {
  const { onClick } = props;
  return (
    <LeftIcon onClick={onClick}>
      <MdChevronLeft style={{ fontSize: 50, color: color.blue }} />
    </LeftIcon>
  );
};

const SamplePrevArrow: React.FC<{
  onClick: MouseEventHandler<HTMLSpanElement>;
}> = (props) => {
  const { onClick } = props;
  return (
    <RightIcon onClick={onClick}>
      <MdChevronRight style={{ fontSize: 50, color: color.blue }} />
    </RightIcon>
  );
};

const CategorySlide = ({ categoryClick }) => {
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
        {/* TODO: api로 변경하고 나서는 Click 인자 변경하기 
        All => 클론 코딩하기, html => html 클론 코딩하기 */}
        <div>
          <Category onClick={() => categoryClick('allList')}>All</Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('html')}>HTML</Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('css')}>CSS</Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('js')}>Javascript</Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('react')}>React</Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('reactNative')}>
            ReactNative
          </Category>
        </div>
        <div>
          <Category onClick={() => categoryClick('typescript')}>
            Typescript
          </Category>
        </div>
      </Slider>
    </CategoryBox>
  );
};

export default CategorySlide;
