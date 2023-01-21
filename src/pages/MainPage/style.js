import styled from 'styled-components';
import { color } from '../../common/color';

// 검색창
export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const SearchBox = styled.div`
  width: 500px;
  height: 50px;
  border: 1px solid ${color.navy};
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;

  input {
    border: none;
    width: 450px;
    height: 40px;
    padding-left: 10px;
    font-size: 16px;
    font-weight: bold;

    :focus-visible {
      outline: none;
    }
  }
`;

export const SearchBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

// 비디오 리스트
export const VideoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoBox = styled.div`
  width: 1100px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
