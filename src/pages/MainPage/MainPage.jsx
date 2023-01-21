import { Fragment } from 'react';
import styled from 'styled-components';
import VideoList from '../../components/MainPage/VideoList/VideoList';
import { VscSearch } from 'react-icons/vsc';
import CategorySlide from '../../components/MainPage/CategorySlide/CategorySlide';
import { color } from '../../common/color';

const MainPage = () => {
  // 검색창 입력값 받기 -useRef 사용하기
  const searchInputHandler = () => {};

  // 검색 실행 함수
  const searchHandler = () => {};

  // 검색창 - 키보드의 enter를 눌렀을 때 실행
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      // TODO: 검색 실행 함수로 바꾸기
      // TODO: 검색 기능 실행 여부에 따라 카테고리 숨기기(상태관리)
      // TODO: input창 초기화
      alert('success');
    }
  };

  return (
    <Fragment>
      <SearchSection>
        {/* TODO: 버튼 필요? */}
        <Searchbox>
          <VscSearch />
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            // TODO: state관리 - value
            // onChange={}
            onKeyPress={handleOnKeyPress}
          />
        </Searchbox>
      </SearchSection>
      {/* 카테고리 슬라이드 */}
      <CategorySlide />
      {/* 카테고리별 비디오 리스트 */}
      <VideoList />
    </Fragment>
  );
};

export default MainPage;

// TODO: style.js 분리하기
// 검색창
export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const Searchbox = styled.div`
  width: 500px;
  height: 50px;
  border: 1px solid ${color.navy};
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;

  input {
    border: none;
    width: 450px;
    height: 40px;
    padding-left: 10px;
    font-size: 16px;

    :focus-visible {
      outline: none;
    }
  }
`;
