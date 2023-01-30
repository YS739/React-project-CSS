import styled from 'styled-components';
import { colors } from '../../common/colors';

// 비디오 리스트
export const VideoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const VideoBox = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
  margin-left: 8%;
  box-sizing: border-box;

  @media screen and (max-width: 1100px) {
    width: 800px;
  }

  @media screen and (max-width: 750px) {
    width: 500px;
    margin-left: 10%;
  }
`;

// Top button
export const TopBtnSection = styled.div`
  position: fixed;
  right: 3%;
  bottom: 5%;
  z-index: 1;
`;
export const TopBtn = styled.button`
  font-weight: bold;
  font-size: 20px;
  padding: 15px 10px;
  background-color: ${colors.GREY};
  color: #fff;
  border: 1px solid ${colors.PURPLE};
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: ${colors.PURPLE};
    color: #fff;
  }
`;
