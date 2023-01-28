import styled from 'styled-components';
import { color } from '../../../common/color';

export const CategoryBox = styled.div`
  width: 800px;
  height: 50px;
  margin: 40px auto;
`;

export const Category = styled.div`
  width: 120px;
  height: 35px;
  border: 1px solid ${color.darkColor};
  border-radius: 10px;
  background-color: ${color.darkColor};
  color: white;
  text-align: center;
  font-weight: 400;
  padding-top: 4px;
  box-sizing: border-box;

  cursor: pointer;

  /* TODO: 컬러를 props으로 받아서 클릭했을 때 변경해주기 */
  :hover {
    background-color: white;
    color: ${color.darkColor};
  }
`;

export const LeftIcon = styled.span`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -7px;
  left: -85px;

  cursor: pointer;
`;

export const RightIcon = styled(LeftIcon)`
  left: 850px;
`;
