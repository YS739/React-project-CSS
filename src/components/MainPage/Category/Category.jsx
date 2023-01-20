import Slider from 'react-slick';
import styled from 'styled-components';
import { Component } from 'react';

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
    };
    return (
      <CategorySection>
        <CategoryBox>
          <Categories>
            <Slider {...settings}>
              <Category>All</Category>
              <Category>HTML</Category>
              <Category>CSS</Category>
              <Category>Javascript</Category>
              <Category>React</Category>
              <Category>ReactNative</Category>
              <Category>Typescript</Category>
            </Slider>
          </Categories>
        </CategoryBox>
      </CategorySection>
    );
  }
}

// export default MultipleItems;

export const CategorySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const CategoryBox = styled.div`
  width: 900px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Categories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: center;
`;

export const Category = styled.div`
  width: 95px;
  height: 35px;
  border: 1px solid #243763;
  border-radius: 10px;
  background-color: #243763;
  color: white;
  text-align: center;
  font-weight: 400;
  padding-top: 4px;
  box-sizing: border-box;

  cursor: pointer;

  /* TODO: 수정하기 */
  :hover {
    background-color: white;
    color: #243763;
  }
`;
