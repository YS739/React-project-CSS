import styled from 'styled-components';
import { colors } from '../../../common/colors';

// 검색창
export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const SearchForm = styled.form`
  width: 500px;
  height: 50px;
  border: 1px solid ${colors.PURPLE};
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

  @media screen and (max-width: 650px) {
    width: 400px;
  }
`;

export const SearchBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

// 검색 결과
export const SearchResultBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const SearchResult = styled.div`
  width: 250px;
  border-bottom: 3px solid ${colors.PURPLE};
  font-size: 22px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;
`;
