import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const CategoryBox = styled.div`
  width: 800px;
  height: 50px;
  margin: 40px auto;

  @media screen and (max-width: 1000px) {
    width: 600px;
  }
  @media screen and (max-width: 800px) {
    width: 400px;
  }
`;

export const Category = styled.button`
  width: 120px;
  height: 35px;
  border: 1px solid ${colors.PURPLE};
  border-radius: 10px;
  background-color: ${(props) => (props.color ? props.color : colors.PURPLE)};
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  padding-top: 4px;
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    background-color: white;
    color: ${colors.PURPLE};
  }
  :focus {
    background-color: white;
    color: ${colors.PURPLE};
  }
`;

export const LeftIcon = styled.span`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -7px;
  left: -85px;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    left: -65px;
  }
`;

export const RightIcon = styled(LeftIcon)`
  left: 850px;

  @media screen and (max-width: 1000px) {
    left: 650px;
  }
  @media screen and (max-width: 800px) {
    left: 450px;
  }
  @media screen and (max-width: 600px) {
    left: 410px;
  }
`;
