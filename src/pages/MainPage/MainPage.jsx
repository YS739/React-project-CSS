import { Fragment } from 'react';
import VideoList from '../../components/MainPage/VideoList/VideoList';
import { HiOutlineSearch } from 'react-icons/hi';
import CategorySlide from '../../components/MainPage/CategorySlide/CategorySlide';
import { useQuery } from 'react-query';
import {
  SearchSection,
  SearchBox,
  SearchBtn,
  VideoSection,
  VideoBox,
} from './style';

const MainPage = () => {
  //FIXME: mockData test - api로 바꿔서 해보기
  const {
    isLoading,
    data: allList,
    error,
  } = useQuery(['allList'], async () => {
    return fetch(`/mockData/allList.json`)
      .then((res) => res.json())
      .then((data) => data.items);
  });

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
        {/* TODO: 완성되면 컴포넌트 분리하기 */}
        <SearchBox>
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            // TODO: state관리 - value
            // onChange={}
            onKeyPress={handleOnKeyPress}
          />
          {/* TODO: onClick={searchHandler} 추가하기 */}
          <SearchBtn>
            <HiOutlineSearch style={{ fontSize: 20 }} />
          </SearchBtn>
        </SearchBox>
      </SearchSection>
      {/* 카테고리 슬라이드 */}
      <CategorySlide />
      {/* 카테고리별 비디오 리스트 */}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      <VideoSection>
        {allList && (
          <VideoBox>
            {allList.map((video) => (
              <VideoList key={video.id['videoId']} video={video} />
            ))}
          </VideoBox>
        )}
      </VideoSection>
    </Fragment>
  );
};

export default MainPage;
